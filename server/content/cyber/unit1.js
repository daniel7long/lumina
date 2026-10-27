import { mc, tf } from '../builder.js';

export default {
  summary: 'Identify what is inside a PC, how its parts connect, and how the operating system, applications, drivers and utilities work together.',
  modules: {
    1: {
      summary: 'Internal components, ports and how storage connects.',
      sessions: [
        {
          t: 'Inside the PC: components and ports',
          s: 'CPU, memory, motherboard, power and common external ports.',
          md: `
## Internal components

| Component | What it does |
| --- | --- |
| **Motherboard** | Main circuit board that connects every component |
| **CPU** (processor) | Executes instructions; the "brain" |
| **RAM** | Fast, **volatile** working memory (lost when power is off) |
| **Storage** (HDD, SSD) | **Non-volatile** long-term storage |
| **Power supply (PSU)** | Converts mains AC to low-voltage DC |
| **Cooling** (heat sink, fans) | Removes heat from the CPU and other parts |
| **Expansion cards** | Add functions (graphics, network, sound) |

### Common external ports
| Port | Typical use |
| --- | --- |
| **USB** (A, C) | Keyboards, drives, many devices |
| **HDMI / DisplayPort / DVI / VGA** | Video to a monitor (VGA is analogue) |
| **RJ-45** | Wired Ethernet network |
| **Audio jacks** | Speakers, microphone |
| **PS/2** | Older keyboard and mouse |
| **eSATA** | External SATA drive |

> **Tip:** RJ-45 (Ethernet) looks like a larger phone jack (RJ-11). Ethernet has 8 pins; a phone line has 4–6.
`,
          q: [
            mc('Which component loses its contents when the computer is turned off?', 'RAM', 'RAM is volatile memory.', [
              ['SSD', 'SSDs are non-volatile.'],
              ['Hard disk drive', 'HDDs are non-volatile.'],
            ]),
            mc('Which port is used to connect a computer to a wired Ethernet network?', 'RJ-45', 'It has 8 pins and a locking tab.', [
              ['HDMI', 'HDMI carries video and audio.'],
              ['PS/2', 'PS/2 is for older keyboards and mice.'],
            ]),
          ],
        },
        {
          t: 'How storage devices connect: PATA, SATA and NVMe',
          s: 'Interfaces, cables and PATA jumper settings.',
          md: `
## Storage interfaces

| Interface | Features |
| --- | --- |
| **PATA** (IDE) | Older **parallel** interface; wide 40-pin ribbon cable (80 wires in later versions); **up to two devices per cable** |
| **SATA** | **Serial**, thin 7-pin data cable, **one device per port**, faster; separate 15-pin power connector |
| **NVMe (M.2)** | SSD directly on the **PCIe** bus; the fastest |

### PATA configuration
Because two devices share a PATA cable, each must be set with a **jumper** as:
- **Master** (device 0) or **Slave** (device 1), or
- **Cable select**: position on the cable decides (the end connector is master, the middle is slave).

If both devices are set as master (or both as slave), the system will have a conflict and may not detect one of them. The **colored stripe** on the ribbon marks pin 1, which should be next to the power connector.

SATA needs no jumpers for master/slave, which is one reason it replaced PATA.
`,
          q: [
            mc('Two hard drives are connected to a single PATA ribbon cable and neither is detected correctly. What is the likely cause?', 'Both drives are jumpered as master (or both as slave)', 'Each device on a PATA cable needs a unique role.', [
              ['The cable has too few pins', 'The cable is normally fine for two devices.'],
              ['SATA drives do not work with PATA', 'This is not a jumper setting problem.'],
            ]),
            mc('How many devices can a single SATA port connect?', 'One', 'SATA is point-to-point.', [
              ['Two', 'That is PATA.'],
              ['Four', 'No standard SATA port supports four.'],
            ]),
          ],
        },
      ],
    },
    2: {
      summary: 'Operating systems, applications, utilities, drivers and updates.',
      sessions: [
        {
          t: 'Operating systems, applications and Windows tools',
          s: 'Which software does what, and which tool to open for a task.',
          md: `
## Software types

- **Operating system (OS):** manages hardware and provides services (Windows, macOS, Linux, Android).
- **Applications:** programs for users' tasks (browser, word processor).
- **Utilities:** maintenance tools (antivirus, disk cleanup, backup).

### Drivers and updates
A **driver** is software that lets the OS communicate with a specific piece of hardware (printer, graphics card). A wrong or missing driver causes a device to fail. **Updates** fix bugs, add features and, importantly, **patch security vulnerabilities**. Keep the OS, drivers and applications updated.

## Choosing a Windows tool
| Scenario | Tool |
| --- | --- |
| A program has stopped responding | **Task Manager** (Ctrl+Shift+Esc) |
| A device shows a yellow warning icon | **Device Manager** |
| Add a new, uninitialized disk or create a partition | **Disk Management** |
| Find out why the system crashed | **Event Viewer** |
| Install patches | **Windows Update** |
| Check the IP address | **Command Prompt** (ipconfig) |
| Which program uses most memory or network | **Resource Monitor / Task Manager** |
| Manage which programs start at boot | **Task Manager (Startup)** |
`,
          q: [
            mc('A printer is not working after a Windows upgrade, and Device Manager shows a warning icon. What should you try first?', 'Update or reinstall the printer driver', 'A driver mismatch is a common cause.', [
              ['Replace the CPU', 'The CPU is not the likely cause.'],
              ['Reformat the hard disk', 'This is extreme and unnecessary.'],
            ]),
            mc('Which Windows tool lets you create or format a disk partition?', 'Disk Management', 'It manages drives and partitions.', [
              ['Event Viewer', 'It shows logs of system events.'],
              ['Device Manager', 'It manages hardware and drivers.'],
            ]),
          ],
        },
      ],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · PC hardware and software',
    tasks: [
      mc('Which component converts mains AC power to low-voltage DC for the PC?', 'Power supply unit', 'The PSU provides DC to the components.', [
        ['Motherboard', 'The motherboard connects the components.'],
        ['CPU', 'The CPU processes instructions.'],
        ['RAM', 'RAM stores working data.'],
      ]),
      mc('Which statement about RAM and an SSD is correct?', 'RAM is volatile; an SSD keeps data when power is off', 'RAM is working memory.', [
        ['Both lose data when powered off', 'An SSD is non-volatile.'],
        ['An SSD is faster and volatile', 'SSDs are non-volatile.'],
        ['RAM is permanent storage', 'It is not.'],
      ]),
      mc('A monitor with only a blue 15-pin D-shaped connector uses which port?', 'VGA', 'VGA is an analogue video connector.', [
        ['HDMI', 'HDMI is a thin, wide, flat connector.'],
        ['RJ-45', 'This is a network connector.'],
        ['USB-C', 'USB-C is small and oval.'],
      ]),
      mc('A technician sets one PATA drive to master and another to slave on the same cable. What is the result?', 'The configuration is valid, because each device has a unique role', 'Master and slave on one cable is the normal setup.', [
        ['A conflict that prevents booting', 'Conflicts happen when both have the same role.'],
        ['The drives work only at half speed in all cases', 'They share the cable but this is a valid setup.'],
        ['It only works with SATA', 'This is a PATA configuration.'],
      ]),
      mc('Which interface connects an SSD directly to the PCIe bus?', 'NVMe (M.2)', 'NVMe is designed for fast flash storage.', [
        ['PATA', 'PATA is an old parallel interface.'],
        ['VGA', 'VGA is a video connector.'],
        ['PS/2', 'PS/2 is for keyboards and mice.'],
      ]),
      mc('A program freezes and you want to end it. Which tool is most direct?', 'Task Manager', 'You can end the task there.', [
        ['Disk Management', 'It manages drives.'],
        ['Windows Update', 'It installs patches.'],
        ['Device Manager', 'It manages hardware.'],
      ]),
      mc('Which of these is a utility rather than an application?', 'Antivirus software', 'Utilities maintain and protect the system.', [
        ['A spreadsheet program', 'It is an application.'],
        ['A web browser', 'It is an application.'],
        ['A video game', 'It is an application.'],
      ]),
      mc('Why is it important to install updates promptly?', 'They fix bugs and patch security vulnerabilities', 'Attackers exploit known weaknesses.', [
        ['They always make the computer faster', 'Not always.'],
        ['They remove the need for antivirus', 'Defense in depth still applies.'],
        ['They replace drivers', 'Updates do not replace drivers.'],
      ]),
      tf('A driver is a hardware component that is installed in an expansion slot.', false, 'A driver is software that lets the operating system communicate with a hardware device.', 'Correct. Drivers are software.'),
    ],
  },
};
