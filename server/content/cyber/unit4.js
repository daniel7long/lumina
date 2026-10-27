import { mc, tf } from '../builder.js';

export default {
  summary: 'Apply number systems to represent characters, choose the right cables, and plan a small network from scratch.',
  modules: {
    9: {
      summary: 'How computers represent numbers and text using decimal, binary and hexadecimal.',
      sessions: [
        {
          t: 'Representing characters in decimal, binary and hex',
          s: 'ASCII and by-hand conversions.',
          md: `
## Text as numbers

Computers store characters as numbers. **ASCII** assigns a number to each character (extended by **Unicode**).

| Character | Decimal | Binary | Hex |
| --- | --- | --- | --- |
| A | 65 | 0100 0001 | 41 |
| a | 97 | 0110 0001 | 61 |
| H | 72 | 0100 1000 | 48 |
| i | 105 | 0110 1001 | 69 |
| 0 (digit) | 48 | 0011 0000 | 30 |

Uppercase and lowercase letters differ by 32 (one bit). The word **"Hi"** is 01001000 01101001 in binary, or **48 69** in hex.

### Converting by hand
- **Binary → decimal:** add the place values of the 1s.
- **Decimal → binary:** subtract the largest power of two that fits, repeatedly.
  - 65 = 64 + 1 → 01000001.

### Why three systems?
- **Binary** is how hardware works (on/off).
- **Decimal** is how people count.
- **Hexadecimal** is a short form of binary used for addresses, memory and colours.

A byte = 8 bits = 2 hex digits = 256 values (0–255).
`,
          q: [
            mc('The ASCII code for "A" is 65. What is it in hexadecimal?', '41', '65 = 4 × 16 + 1.', [
              ['65', 'That is the decimal value.'],
              ['14', 'This is not the conversion.'],
            ]),
            mc('Which binary value is the ASCII code of "a" (97)?', '0110 0001', '64 + 32 + 1 = 97.', [
              ['0100 0001', 'This is 65, "A".'],
              ['0110 1001', 'This is 105, "i".'],
            ]),
          ],
        },
      ],
    },
    10: {
      summary: 'Choose cables and plan a small network that works end to end.',
      sessions: [
        {
          t: 'Cables and connections',
          s: 'Straight-through, crossover, console and fibre.',
          md: `
## Selecting the right cable

| Cable | Use |
| --- | --- |
| **Straight-through** (Ethernet) | Connects **different** device types: PC ↔ switch, router ↔ switch |
| **Crossover** (Ethernet) | Connects **like** devices: switch ↔ switch, PC ↔ PC, router ↔ router (many modern ports auto-detect, called auto-MDIX) |
| **Console (rollover)** | PC (serial or USB adapter) ↔ **console port** of a router or switch, for **management**, not data |
| **Serial** | WAN link between routers |
| **Fibre optic** | Long distance, high speed, immune to electrical interference |

### Ethernet and console cables
- Ethernet uses an **RJ-45** plug on twisted-pair cable (Cat5e, Cat6), up to **100 m** per segment.
- A console cable is typically **light blue** with RJ-45 on one end and DB-9/USB on the other. It does **not** carry normal network traffic.
- Console access is used for **first configuration** and recovery, using a terminal program (such as PuTTY) at 9600 baud.

### Quick rule
Different layers/types → straight-through. Same type → crossover. To configure a device through its management port → console cable.
`,
          q: [
            mc('Which cable would you use to connect a PC to a switch?', 'Straight-through Ethernet cable', 'Different device types use a straight-through cable.', [
              ['Console (rollover) cable', 'It is for management access, not network data.'],
              ['Crossover cable', 'It is for like devices.'],
            ]),
            mc('You need to configure a new router that has no IP address yet. How do you connect to it?', 'A console cable from the PC to the router\'s console port', 'It lets you configure without a network.', [
              ['A fibre cable to the LAN port', 'The router is not yet configured.'],
              ['Wi-Fi', 'No network is available.'],
            ]),
          ],
        },
        {
          t: 'Capstone: planning a small network',
          s: 'Bringing addressing, routing and cabling together.',
          md: `
## Capstone design

**Scenario.** A small office has 40 employees in Sales and 20 in Support. Each department has its own LAN. They connect through a router, which has an Internet link. You are given 192.168.10.0/24.

### Step 1: Plan the addresses
- Sales needs ≥ 40 hosts, so use a /26 (62 hosts): **192.168.10.0/26**
- Support needs ≥ 20 hosts, so use a /27 (30 hosts): **192.168.10.64/27**
- Router gateways: .1 in Sales, .65 in Support.

### Step 2: Choose devices
- 2 switches (one per department), 1 router, and a firewall or edge router for the Internet.

### Step 3: Choose cables
- PC ↔ switch: straight-through
- Switch ↔ router: straight-through
- Router console configuration: console cable
- Router ↔ ISP: as provided (Ethernet, fibre or serial)

### Step 4: Configure
- Assign IPs and default gateways to hosts (static or DHCP).
- Configure router interfaces and a **default route** to the ISP.
- Use **NAT/PAT** for Internet access from private addresses.

### Step 5: Test
\`ping\` the gateway, \`ping\` across subnets, \`tracert\` to an Internet address, and check \`show ip route\`.

> Always **document** addresses, cable connections and configurations.
`,
          q: [
            mc('The Support department needs 20 hosts. Which subnet size is the smallest that fits?', '/27 (30 usable hosts)', '/28 gives only 14; /27 gives 30.', [
              ['/28 (14 usable hosts)', 'This is too small for 20 hosts.'],
              ['/24 (254 usable hosts)', 'It works but wastes addresses.'],
            ]),
            mc('Which feature lets many private hosts in the office share one public address?', 'PAT (NAT overload)', 'It maps connections by port numbers.', [
              ['A crossover cable', 'It is a cable, not an address translation.'],
              ['A subnet mask', 'It defines network size.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Core skills and capstone',
    tasks: [
      mc('What is the decimal value of binary 01000001?', '65', '64 + 1 = 65.', [
        ['64', 'The final 1 adds one.'],
        ['129', 'This is 10000001.'],
        ['41', 'This is the hex value.'],
      ]),
      mc('What is 255 in binary?', '11111111', '128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255.', [
        ['11111110', 'This is 254.'],
        ['10000000', 'This is 128.'],
        ['11110000', 'This is 240.'],
      ]),
      mc('What is the hexadecimal value of decimal 2748?', 'ABC', '10 × 256 + 11 × 16 + 12 = 2748.', [
        ['CBA', 'The digits are reversed.'],
        ['A12', 'This is not the conversion.'],
        ['2748', 'This is the decimal number.'],
      ]),
      mc('The word "Hi" is stored using ASCII. Which hex string represents it?', '48 69', 'H = 0x48, i = 0x69.', [
        ['69 48', 'This is "iH".'],
        ['68 49', 'This is "hI".'],
        ['41 61', 'This is "Aa".'],
      ]),
      mc('Which cable connects two switches (without auto-MDIX)?', 'Crossover', 'Like devices use a crossover cable.', [
        ['Straight-through', 'This is for unlike devices.'],
        ['Console', 'This is for management.'],
        ['Coaxial', 'This is not used in modern LANs.'],
      ]),
      mc('You want to configure a new switch from your laptop for the first time. Which connection is most appropriate?', 'Console cable to the switch\'s console port', 'It needs no network configuration.', [
        ['Straight-through cable to the switch and Telnet', 'The switch has no IP address.'],
        ['Fibre cable to the router', 'The switch has not been configured.'],
        ['Wi-Fi', 'The switch has no wireless access.'],
      ]),
      mc('What is the maximum recommended length for a twisted-pair Ethernet segment?', '100 metres', 'The standard limit for Cat5e/6.', [
        ['10 metres', 'This is too short.'],
        ['1 kilometre', 'This is too long for copper.'],
        ['There is no limit', 'Signal loss limits length.'],
      ]),
      mc('Sales needs 40 hosts and Support needs 20. Using 192.168.10.0/24, which design is valid?', 'Sales 192.168.10.0/26 and Support 192.168.10.64/27', 'The networks fit and do not overlap.', [
        ['Sales 192.168.10.0/27 and Support 192.168.10.0/26', 'They overlap and /27 is too small for 40 hosts.'],
        ['Both use 192.168.10.0/24', 'They would be the same network.'],
        ['Sales 192.168.10.0/28', 'A /28 has only 14 hosts.'],
      ]),
      mc('A PC in the Sales LAN can ping its own gateway but not a PC in the Support LAN. Which is the most likely cause?', 'A missing or wrong route or gateway configuration', 'The local network works, so the fault is in routing.', [
        ['A faulty monitor', 'Not relevant.'],
        ['Too much RAM', 'Not relevant.'],
        ['An incorrect keyboard', 'Not relevant.'],
      ]),
      tf('A console cable is used to carry normal network traffic between a PC and a switch.', false, 'A console cable provides management access to the device. Normal traffic uses an Ethernet cable on a data port.', 'Correct. The console port is for management only.'),
    ],
  },
};
