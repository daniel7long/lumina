import { mc, tf } from '../builder.js';

export default {
  summary: 'Follow packets across networks: routes and routing tables, subnetting, converting number systems, and summarizing routes for IPv4 and IPv6.',
  modules: {
    5: {
      summary: 'What a route is, the default gateway, static vs. dynamic routing and tracert.',
      sessions: [
        {
          t: 'Routes, gateways and routing methods',
          s: 'Static, default and dynamic routes.',
          md: `
## Routing basics

A **route** is a path to a destination network, held in a router's **routing table**: *destination network, next hop (or exit interface), metric*.

### Default gateway
A host sends traffic for any address **outside its own subnet** to its **default gateway** (the router interface on its LAN). Without a gateway, a host can talk only to its own network.

### Static, default and dynamic routes
| Type | How it is made | Good for |
| --- | --- | --- |
| **Static route** | Configured by an administrator | Small, stable networks; predictable |
| **Default route** | A static route that matches **any** destination (0.0.0.0/0) | "Gateway of last resort", e.g. toward the Internet |
| **Dynamic route** | Learned from a routing protocol (RIP, OSPF, EIGRP) | Larger networks that change; adapts automatically after failures |

Static routes use no bandwidth and no CPU for protocol updates, but need manual changes. Dynamic routing needs more resources but scales.

### Using tracert
\`tracert\` (Windows; \`traceroute\` on Linux and macOS) lists each **hop** (router) along the path with the round-trip times for three probes.
- A sudden jump in time suggests a slow link at that hop.
- "Request timed out" (* * *) at a hop may mean the router does not respond (or is blocked) but traffic may still pass.
- If the trace stops at a hop and never continues, the problem is **at or after** that hop.
`,
          q: [
            mc('A host wants to send a packet to an address outside its subnet. Where does it send the packet?', 'To its default gateway', 'The gateway forwards it toward the destination.', [
              ['Directly to the destination', 'Hosts only deliver directly within their own subnet.'],
              ['To the DNS server', 'DNS resolves names.'],
            ]),
            mc('Which is a typical advantage of dynamic routing over static routing?', 'It adapts automatically when the network changes', 'Static routes must be manually changed.', [
              ['It uses no CPU or bandwidth', 'That is an advantage of static routing.'],
              ['It cannot be misconfigured', 'Any configuration can be wrong.'],
            ]),
          ],
        },
      ],
    },
    6: {
      summary: 'Subnetting IPv4 and configuring static routes.',
      sessions: [
        {
          t: 'Subnetting an IPv4 network',
          s: 'Borrowing host bits to make smaller networks.',
          md: `
## Subnetting

**Subnetting** divides one network into smaller ones by **borrowing host bits** for the network portion.

**Example:** divide 192.168.1.0/24 into **4** subnets.
- 4 subnets need **2 borrowed bits** (2² = 4) → the mask becomes **/26** = 255.255.255.192.
- Each subnet has 2⁶ = 64 addresses, so **62 usable hosts**.
- The subnet increment is **256 − 192 = 64**.

| Subnet | Network address | Usable range | Broadcast |
| --- | --- | --- | --- |
| 1 | 192.168.1.0/26 | .1 – .62 | 192.168.1.63 |
| 2 | 192.168.1.64/26 | .65 – .126 | 192.168.1.127 |
| 3 | 192.168.1.128/26 | .129 – .190 | 192.168.1.191 |
| 4 | 192.168.1.192/26 | .193 – .254 | 192.168.1.255 |

### Useful values for the last octet
| Prefix | Mask (last octet) | Block size | Usable hosts |
| --- | --- | --- | --- |
| /25 | 128 | 128 | 126 |
| /26 | 192 | 64 | 62 |
| /27 | 224 | 32 | 30 |
| /28 | 240 | 16 | 14 |
| /29 | 248 | 8 | 6 |
| /30 | 252 | 4 | 2 |

**Which subnet is 172.16.5.130/26 in?** The block size is 64, and 130 is between 128 and 191, so the network is 172.16.5.**128**/26.
`,
          q: [
            mc('192.168.1.0/24 is divided into 4 equal subnets. What is the new subnet mask?', '255.255.255.192', 'Two borrowed bits make a /26.', [
              ['255.255.255.128', 'This gives only 2 subnets.'],
              ['255.255.255.224', 'This gives 8 subnets.'],
            ]),
            mc('How many usable hosts are in a /27 subnet?', '30', '2⁵ − 2 = 30.', [
              ['32', 'Two addresses are reserved.'],
              ['62', 'This is a /26 subnet.'],
            ]),
          ],
        },
        {
          t: 'Configuring static routes',
          s: 'The ip route command and a worked example.',
          md: `
## Static routes on a Cisco router

Syntax:
\`\`\`
ip route <destination network> <mask> <next-hop IP | exit interface>
\`\`\`

**Example topology:** R1 (LAN 192.168.1.0/24) is linked by 10.0.0.0/30 to R2 (LAN 192.168.2.0/24). R1's link address is 10.0.0.1 and R2's is 10.0.0.2.

On **R1**, to reach R2's LAN:
\`\`\`
ip route 192.168.2.0 255.255.255.0 10.0.0.2
\`\`\`
On **R2**, to reach R1's LAN:
\`\`\`
ip route 192.168.1.0 255.255.255.0 10.0.0.1
\`\`\`

A **default route** sends everything else to the next hop:
\`\`\`
ip route 0.0.0.0 0.0.0.0 10.0.0.2
\`\`\`

### Good practice
- Routes must exist in **both directions**; a missing return route is a common fault.
- The next hop must be reachable.
- Check with \`show ip route\` and \`ping\`.
`,
          q: [
            mc('On R1, which command creates a route to 192.168.2.0/24 via the next hop 10.0.0.2?', 'ip route 192.168.2.0 255.255.255.0 10.0.0.2', 'Destination, mask, then next hop.', [
              ['ip route 10.0.0.2 255.255.255.0 192.168.2.0', 'The destination and next hop are swapped.'],
              ['ip route 192.168.2.0 255.255.255.255 10.0.0.2', 'A /32 mask matches a single host only.'],
            ]),
            tf('A static route on R1 to R2\'s LAN is enough for two-way communication; R2 does not need a route back.', false, 'Return traffic also needs a route. R2 needs a route (or a default route) back to R1\'s LAN.', 'Correct. Routing must work in both directions.'),
          ],
        },
      ],
    },
    7: {
      summary: 'Reading routing tables and using binary and hexadecimal.',
      sessions: [
        {
          t: 'Interpreting a routing table',
          s: 'Codes, longest prefix match and administrative distance.',
          md: `
## Reading \`show ip route\`

\`\`\`
C    192.168.1.0/24 is directly connected, GigabitEthernet0/0
L    192.168.1.1/32 is directly connected, GigabitEthernet0/0
S    192.168.2.0/24 [1/0] via 10.0.0.2
O    192.168.3.0/24 [110/20] via 10.0.0.2, Serial0/0/0
S*   0.0.0.0/0 [1/0] via 10.0.0.2
\`\`\`

| Code | Meaning |
| --- | --- |
| **C** | Directly **connected** network |
| **L** | **Local** address of the router's own interface |
| **S** | **Static** route |
| **S*** | Static **default** route |
| **O** | **OSPF** (dynamic) |
| **R** | **RIP** (dynamic) |

\`[1/0]\` is \`[administrative distance / metric]\`. A **lower administrative distance is more trusted**: connected 0, static 1, EIGRP 90, OSPF 110, RIP 120.

### Longest prefix match
When several routes match a destination, the router picks the one with the **longest prefix** (most specific mask). A packet for 192.168.2.55 matches both 192.168.2.0/24 and the default route 0.0.0.0/0; the /24 wins. If nothing matches and there is no default route, the packet is **dropped**.
`,
          q: [
            mc('A routing table entry begins with "S*". What does it mean?', 'A static default route', 'The asterisk marks the candidate default route.', [
              ['A directly connected network', 'That would be C.'],
              ['An OSPF route', 'That would be O.'],
            ]),
            mc('A router has routes for 10.0.0.0/8 and 10.1.0.0/16. A packet is sent to 10.1.2.3. Which route is used?', '10.1.0.0/16, because it has the longest prefix', 'The most specific match wins.', [
              ['10.0.0.0/8, because it was learned first', 'The order does not matter.'],
              ['Neither; the packet is dropped', 'Both match.'],
            ]),
          ],
        },
        {
          t: 'Decimal, binary and hexadecimal conversion',
          s: 'Tools and by-hand methods.',
          md: `
## Three number systems

| Decimal | Binary | Hexadecimal |
| --- | --- | --- |
| 0 | 0000 | 0 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 15 | 1111 | F |
| 16 | 0001 0000 | 10 |
| 255 | 1111 1111 | FF |

**Hexadecimal (base 16)** uses 0–9 and A–F. One hex digit = **4 bits**, so one byte = two hex digits. That makes it a compact way to write binary (used in MAC addresses, IPv6 and colours).

### Converting
- **Hex to decimal:** 2F = 2×16 + 15 = **47**. 1F = 31. FF = 255.
- **Decimal to hex:** divide by 16. 2748 ÷ 16 = 171 remainder 12 (C); 171 ÷ 16 = 10 remainder 11 (B); 10 = A → **ABC**.
- **Binary to hex:** group by four bits from the right: 1010 1100 → AC.
- **Tool:** Windows Calculator in **Programmer** mode converts between all three instantly.

### Where hex appears
A MAC address such as \`00-1A-2B-3C-4D-5E\` is 48 bits in 12 hex digits. An IPv6 address is 128 bits in 32 hex digits.
`,
          q: [
            mc('What is the decimal value of hexadecimal FF?', '255', '15 × 16 + 15 = 255.', [
              ['256', 'FF is one less than 256.'],
              ['15', 'That is F alone.'],
            ]),
            mc('What is binary 1010 1100 in hexadecimal?', 'AC', '1010 = A and 1100 = C.', [
              ['CA', 'The order is reversed.'],
              ['A12', 'This does not match the groups.'],
            ]),
          ],
        },
      ],
    },
    8: {
      summary: 'Summarizing routes in IPv4 and IPv6.',
      sessions: [
        {
          t: 'Route summarization',
          s: 'Combining contiguous networks into one route, IPv4 and IPv6.',
          md: `
## Route summarization

**Summarization** (aggregation) replaces several routes with **one** summary route. It shrinks routing tables and updates, and hides instability inside the summarized range.

### IPv4 method
1. Write the network addresses in binary.
2. Find the **longest common prefix** (the leftmost bits that are identical).
3. The summary prefix length = the number of common bits.

**Example:** 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24, 192.168.3.0/24.

Third octets: 0 = 00000000, 1 = 00000001, 2 = 00000010, 3 = 00000011. The first **6 bits** of the third octet match, so the common prefix is 16 + 6 = **22 bits**.

**Summary: 192.168.0.0/22** (mask 255.255.252.0).

> The networks must be **contiguous** and the block must be aligned. 192.168.1.0/24 to 192.168.4.0/24 cannot be summarized in a single exact route.

### IPv6
IPv6 addresses are 128 bits written in hexadecimal. The same method applies. Four /64 networks:

2001:db8:acad:**0**::/64, **1**::/64, **2**::/64, **3**::/64

The fourth hextet differs in the last 2 bits, so 64 − 2 = **62** bits are common.

**Summary: 2001:db8:acad::/62**.
`,
          q: [
            mc('What is the best summary of 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24 and 192.168.3.0/24?', '192.168.0.0/22', 'The first 22 bits are identical.', [
              ['192.168.0.0/24', 'This covers only one network.'],
              ['192.168.0.0/16', 'This includes many more networks than needed.'],
            ]),
            mc('Four contiguous IPv6 networks 2001:db8:acad:0::/64 to 2001:db8:acad:3::/64 can be summarized as', '2001:db8:acad::/62', 'Two bits differ, so the prefix is 64 − 2 = 62.', [
              ['2001:db8:acad::/64', 'This covers only one.'],
              ['2001:db8:acad::/60', 'This would cover 16 networks.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 3 assessment · Cisco networking',
    tasks: [
      mc('Which statement describes a default route?', 'A route that matches any destination not found in the table', 'It is the gateway of last resort.', [
        ['A route learned only by OSPF', 'It can be static or dynamic.'],
        ['A route for the local interface only', 'That is a local route.'],
        ['A route that is never used', 'It is used when no other route matches.'],
      ]),
      mc('A host has IP 192.168.1.10/24 and no default gateway configured. What can it do?', 'Communicate only with hosts on its own subnet', 'Without a gateway it cannot reach other networks.', [
        ['Reach the Internet normally', 'It needs a gateway.'],
        ['Reach all private networks', 'Other networks need a router.'],
        ['Nothing at all', 'It can still reach its local subnet.'],
      ]),
      mc('You divide 192.168.10.0/24 into 8 equal subnets. What is the subnet mask?', '255.255.255.224', '3 borrowed bits give /27.', [
        ['255.255.255.192', 'This gives 4 subnets.'],
        ['255.255.255.240', 'This gives 16 subnets.'],
        ['255.255.255.0', 'This is the original mask.'],
      ]),
      mc('A host has the address 172.16.5.130/26. What is the network address?', '172.16.5.128', 'The block size is 64 and 130 lies in 128–191.', [
        ['172.16.5.0', 'This is the first /26 block.'],
        ['172.16.5.64', 'This is the second block.'],
        ['172.16.5.192', 'This is the fourth block.'],
      ]),
      mc('What is the broadcast address of 192.168.10.0/27?', '192.168.10.31', 'The block of 32 addresses ends at .31.', [
        ['192.168.10.32', 'This is the next network address.'],
        ['192.168.10.255', 'This is the broadcast for the /24.'],
        ['192.168.10.30', 'This is the last usable host.'],
      ]),
      mc('Which command configures a static route to 10.2.0.0/16 via 172.16.0.2?', 'ip route 10.2.0.0 255.255.0.0 172.16.0.2', 'Destination network, mask, next hop.', [
        ['ip route 172.16.0.2 255.255.0.0 10.2.0.0', 'The destination and next hop are swapped.'],
        ['ip route 10.2.0.0 255.255.255.0 172.16.0.2', 'The mask should be /16.'],
        ['route add 10.2.0.0', 'This is not Cisco IOS syntax.'],
      ]),
      mc('A routing table has a route with code "O". Which type of route is it?', 'A dynamic route learned through OSPF', 'O = OSPF.', [
        ['A static route', 'That is S.'],
        ['A directly connected route', 'That is C.'],
        ['A local route', 'That is L.'],
      ]),
      mc('Two routes have administrative distances of 1 (static) and 110 (OSPF) for the same prefix. Which is preferred?', 'The static route', 'A lower administrative distance is more trusted.', [
        ['The OSPF route', '110 is less preferred than 1.'],
        ['Both are used equally', 'Different sources are not load balanced by default.'],
        ['Neither', 'One of them is selected.'],
      ]),
      mc('What is the decimal value of the hexadecimal number 2F?', '47', '2 × 16 + 15 = 47.', [
        ['31', 'This is 1F.'],
        ['215', 'This is not the conversion.'],
        ['29', 'This is not the conversion.'],
      ]),
      mc('Which prefix summarizes 10.1.0.0/24, 10.1.1.0/24, 10.1.2.0/24 and 10.1.3.0/24?', '10.1.0.0/22', 'The first 22 bits are common.', [
        ['10.1.0.0/23', 'This covers only two networks.'],
        ['10.1.0.0/24', 'This covers only one.'],
        ['10.0.0.0/22', 'The second octet differs from the networks.'],
      ]),
      tf('In a tracert output, a hop that shows "Request timed out" always means that traffic is blocked there.', false, 'Some routers do not answer probes but still forward traffic. Look at whether later hops respond.', 'Correct. A timeout at one hop does not necessarily mean the path is broken.'),
    ],
  },
};
