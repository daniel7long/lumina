import { mc, tf } from '../builder.js';

export default {
  summary: 'Learn how networks move data, how computers count in binary, how IP addresses and subnet masks work, and the basic threats and defenses in network security.',
  modules: {
    3: {
      summary: 'Devices, addresses, binary numbers and Network Address Translation.',
      sessions: [
        {
          t: 'Network devices and IP addresses',
          s: 'Switches, routers, IPv4 addresses and private ranges.',
          md: `
## Network essentials

### Common devices
| Device | Role |
| --- | --- |
| **NIC** | Connects a host to a network |
| **Switch** | Connects devices in a LAN and forwards frames using **MAC** addresses |
| **Router** | Connects different networks and forwards packets using **IP** addresses |
| **Access point** | Provides Wi-Fi |
| **Firewall** | Filters traffic by rules |

### IP addresses
An **IPv4 address** has 32 bits written as four decimal **octets**: 192.168.1.10. It identifies a host (the **host portion**) on a network (the **network portion**), and is used to route packets between networks.

**Private ranges** (not routed on the Internet):
- 10.0.0.0 – 10.255.255.255 (10.0.0.0/8)
- 172.16.0.0 – 172.31.255.255 (172.16.0.0/12)
- 192.168.0.0 – 192.168.255.255 (192.168.0.0/16)

Note: 172.32.0.1 is **public**; 172.31.0.1 is private.

### Network Address Translation (NAT)
Private addresses must be translated to public ones to reach the Internet.
- **Static NAT:** one-to-one fixed mapping.
- **Dynamic NAT:** private addresses are mapped to a **pool** of public addresses on demand.
- **PAT (overload):** many private addresses share **one** public address, distinguished by port numbers.

### Configuring dynamic NAT (Cisco IOS)
\`\`\`
access-list 1 permit 192.168.1.0 0.0.0.255
ip nat pool PUBLIC 203.0.113.10 203.0.113.20 netmask 255.255.255.0
ip nat inside source list 1 pool PUBLIC
interface g0/0
 ip nat inside
interface g0/1
 ip nat outside
\`\`\`
The ACL says **which** inside addresses may be translated, the pool lists the public addresses, and the interfaces are marked **inside** (LAN) and **outside** (Internet).
`,
          q: [
            mc('Which of these addresses is public (routable on the Internet)?', '172.32.0.1', 'The private 172 range ends at 172.31.255.255.', [
              ['172.16.5.9', 'This is in the private range.'],
              ['192.168.1.20', 'This is in the private range.'],
            ]),
            mc('In the dynamic NAT configuration, what does "ip nat inside source list 1 pool PUBLIC" do?', 'It translates inside addresses matched by ACL 1 using addresses from the pool PUBLIC', 'It links the ACL (who) with the pool (what to translate to).', [
              ['It blocks all traffic from the inside network', 'It does not block traffic.'],
              ['It assigns static IP addresses to the PCs', 'It does not configure hosts.'],
            ]),
          ],
        },
        {
          t: 'Binary, decimal and addition',
          s: 'Converting numbers and adding in binary.',
          md: `
## Counting in binary

Computers use **binary (base 2)**: digits 0 and 1. Each position is a power of 2.

| Bit position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

### Binary to decimal
11000000 = 128 + 64 = **192**. 10101010 = 128 + 32 + 8 + 2 = **170**.

### Decimal to binary
Subtract the largest powers of two in turn. 172 = 128 + 32 + 8 + 4, so **10101100**.

### Adding in binary
Rules: 0+0=0, 0+1=1, 1+0=1, **1+1=10** (write 0, carry 1).

\`\`\`
   1011   (11)
 + 0110   (6)
 ------
  10001   (17)
\`\`\`
Check: 11 + 6 = 17 = 16 + 1 = 10001 ✓.

An octet (8 bits) can store 0 to 255 (2⁸ = 256 values). An IPv4 address has 4 octets, so about 2³² ≈ 4.3 billion addresses.
`,
          q: [
            mc('What is 11000000 in decimal?', '192', '128 + 64 = 192.', [
              ['128', 'You need to add the 64 as well.'],
              ['224', 'That would be 11100000.'],
            ]),
            mc('What is 1011 + 0110 in binary?', '10001', '11 + 6 = 17 = 10001.', [
              ['10101', 'This is 21.'],
              ['1111', 'This is 15.'],
            ]),
          ],
        },
      ],
    },
    4: {
      summary: 'Subnet masks, certificates and basic security controls.',
      sessions: [
        {
          t: 'Classful IPv4 and subnet masks',
          s: 'Address classes, default masks and CIDR notation.',
          md: `
## Subnet masks

A **subnet mask** shows which bits of an IPv4 address belong to the **network** (1s) and which belong to the **host** (0s).

### Classful addressing (historical)
| Class | First octet | Default mask | CIDR | Hosts per network |
| --- | --- | --- | --- | --- |
| **A** | 1–126 | 255.0.0.0 | /8 | 16,777,214 |
| **B** | 128–191 | 255.255.0.0 | /16 | 65,534 |
| **C** | 192–223 | 255.255.255.0 | /24 | 254 |

Usable hosts = 2ʰ − 2, where h is the number of host bits (one address is the **network address** and one is the **broadcast**). For a class C: 2⁸ − 2 = 254.

Two hosts are on the same network if the bitwise AND of their address with the mask gives the same network address.

Example: 192.168.1.130 with mask 255.255.255.0 → network 192.168.1.0.

Today we use **classless (CIDR)** addressing with masks of any length (see Unit 3).
`,
          q: [
            mc('What is the default subnet mask of the address 172.16.5.9 (class B)?', '255.255.0.0', 'Class B networks use /16.', [
              ['255.0.0.0', 'This is class A.'],
              ['255.255.255.0', 'This is class C.'],
            ]),
            mc('How many usable host addresses are there in a class C network (/24)?', '254', '2⁸ − 2 = 254.', [
              ['256', 'Two addresses are reserved.'],
              ['255', 'Two addresses are reserved, not one.'],
            ]),
          ],
        },
        {
          t: 'Certificates and common security basics',
          s: 'Authentication, encryption, firewalls and threats.',
          md: `
## Security fundamentals

### Common threats
- **Malware:** viruses, worms, ransomware, spyware
- **Phishing:** deceptive messages that trick users into revealing credentials
- **Social engineering:** manipulating people rather than systems
- **Denial of service (DoS):** overwhelming a service
- **Man-in-the-middle:** an attacker intercepts communication

### Basic defenses
| Defense | Purpose |
| --- | --- |
| **Authentication** | Prove identity (passwords, **multifactor authentication**) |
| **Encryption** | Make data unreadable without a key |
| **Firewall** | Allow or block traffic using rules |
| **Updates / patches** | Fix known vulnerabilities |
| **Antivirus / anti-malware** | Detect and remove malicious software |
| **Backups** | Recover from loss or ransomware |
| **User training** | Reduce successful phishing |

### Digital certificates
A **digital certificate** binds a **public key** to an identity (a website or person) and is **signed by a certificate authority (CA)** that vouches for it. When a browser connects with HTTPS, the server sends its certificate; the browser checks the signature, the name and the expiry date. The padlock means the connection is encrypted and the site's identity has been verified by a CA, though it does not mean the site is trustworthy in every other way.
`,
          q: [
            mc('What does a digital certificate do?', 'It links a public key to an identity, vouched for by a certificate authority', 'This lets a client trust the server\'s public key.', [
              ['It stores a user\'s password', 'Certificates do not hold passwords.'],
              ['It makes a website free of malware', 'It verifies identity, not safety.'],
            ]),
            mc('An email asks you to click a link and "verify your bank account". Which threat is this most likely?', 'Phishing', 'It tries to trick you into revealing credentials.', [
              ['Denial of service', 'DoS floods a service.'],
              ['Ransomware encryption', 'Ransomware locks files.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 2 assessment · Network and security foundations',
    tasks: [
      mc('Which device connects two different IP networks?', 'Router', 'Routers forward packets between networks.', [
        ['Switch', 'Switches connect devices in a LAN.'],
        ['Hub', 'Hubs repeat signals within a network.'],
        ['NIC', 'A NIC connects one host.'],
      ]),
      mc('What is 10101100 in decimal?', '172', '128 + 32 + 8 + 4 = 172.', [
        ['170', 'That is 10101010.'],
        ['168', 'That is 10101000.'],
        ['176', 'That is 10110000.'],
      ]),
      mc('What is 192 in binary?', '11000000', '192 = 128 + 64.', [
        ['10000001', 'This is 129.'],
        ['11100000', 'This is 224.'],
        ['10101010', 'This is 170.'],
      ]),
      mc('What is 1111 + 0001 in binary?', '10000', '15 + 1 = 16 = 10000.', [
        ['1110', 'This is 14.'],
        ['11111', 'This is 31.'],
        ['1000', 'This is 8.'],
      ]),
      mc('Which of these addresses is NOT private?', '172.32.10.5', 'The 172.16–172.31 range is private; 172.32 is public.', [
        ['10.20.30.40', 'This is private.'],
        ['172.20.1.1', 'This is private.'],
        ['192.168.100.5', 'This is private.'],
      ]),
      mc('Many home PCs share one public address and are distinguished by port numbers. What is this called?', 'PAT (NAT overload)', 'Port Address Translation allows many-to-one mapping.', [
        ['Static NAT', 'Static NAT is one-to-one.'],
        ['DHCP', 'DHCP assigns addresses, not translation.'],
        ['DNS', 'DNS resolves names.'],
      ]),
      mc('What is the number of usable hosts in a network with 6 host bits?', '62', '2⁶ − 2 = 62.', [
        ['64', 'Two addresses are reserved.'],
        ['63', 'Two addresses are reserved.'],
        ['32', 'This is 2⁵.'],
      ]),
      mc('Hosts 192.168.1.10 and 192.168.1.200 have mask 255.255.255.0. Are they in the same network?', 'Yes: both are in 192.168.1.0', 'The first three octets match under a /24 mask.', [
        ['No: the last octets differ', 'The last octet is the host portion.'],
        ['No: one is private', 'Both are private.'],
        ['Only if they have the same MAC address', 'MAC addresses are irrelevant here.'],
      ]),
      mc('Which is the best defense against a successful phishing attack?', 'User training and multifactor authentication', 'Users and layered authentication reduce the damage.', [
        ['A faster CPU', 'This does not help.'],
        ['More RAM', 'This does not help.'],
        ['A larger monitor', 'This does not help.'],
      ]),
      tf('The padlock in a browser guarantees that a website is trustworthy.', false, 'The padlock shows the connection is encrypted and the site\'s identity was verified by a CA. It does not guarantee the site itself is safe or honest.', 'Correct. A certificate verifies identity and encrypts the connection, not trustworthiness.'),
    ],
  },
};
