# NexRemote Privacy Policy

Last Updated: November 1, 2026

Neural Nexus Studios ("Neural Nexus Studios", "we", "our", or "us") publishes NexRemote, including the Windows host application and the Android client application. This Privacy Policy explains how NexRemote accesses, stores, uses, transmits, and protects data.

This Privacy Policy applies to:

- the NexRemote Windows host application
- the NexRemote Android client application
- the related in-app legal screens and store listings for those products

## 1. Contact Information

Developer and publisher: Neural Nexus Studios  
Principal place of business: Kolkata, West Bengal, India  
Website: https://avishakeadhikary.github.io/Neural-Nexus-Studios/  
Privacy and support contact: neural.nex.studios@gmail.com

## 2. Product Model

NexRemote is designed for remote control and device-management workflows between devices that you own, administer, or are expressly authorized to manage.

NexRemote does not require a user account for its core operation. Neural Nexus Studios does not operate a cloud backend, relay service, analytics platform, advertising service, or crash-reporting backend for normal NexRemote use. In normal operation, NexRemote is intended to work directly between your own devices or other devices you explicitly choose to connect.

## 3. Data NexRemote Stores Locally

### Windows host

Depending on the features you enable, the Windows host may store the following data locally on the PC:

- app settings, including PC name, ports, theme, log settings, remote-access preferences, and legal acceptance timestamps
- trusted-device records, including device identifiers, device names, connection timestamps, and paired public keys
- local certificate files, certificate fingerprints, and related trust material used to secure connections
- operational and audit logs generated for troubleshooting, diagnostics, security review, and local administration
- cached files required for temporary app operations such as QR generation or local tooling

### Android client

Depending on the features you use, the Android client may store the following data locally on the phone or tablet:

- app settings, including device name, device identifier, last connected server, connection preferences, haptic settings, gyro sensitivity, and legal acceptance records
- certificate pins or fingerprints used to trust a selected NexRemote server
- locally generated client identity keys stored by Android platform security components
- custom gamepad layouts, macros, and related local control preferences
- local disclosure acknowledgements, such as the QR camera disclosure acknowledgement

## 4. Data NexRemote Accesses Or Transmits During Use

When you enable a connection and use NexRemote features, the app may access, display, or transmit the following categories of data between your devices:

- device names, device identifiers, connection metadata, network endpoints, and certificate fingerprints for discovery, pairing, and trust verification
- remote input commands such as keyboard, mouse, touchpad, touch, trigger, joystick, d-pad, gyro, macro, or gamepad events
- live screen-sharing frames, screen metadata, and optional system-audio stream data
- live camera-streaming frames and camera metadata
- phone screen sharing (optional): a live video of the Android phone's screen, its size and rotation, sent only to the Windows host you are connected to and shown there while sharing is on. It is not recorded or stored by the apps or by Neural Nexus Studios
- PC control of a shared phone (optional): tap, swipe and Back/Home/Recents commands sent from the Windows host to the phone
- file and folder names, paths, metadata, and file contents when you browse, read, create, move, copy, rename, or edit files through the file feature
- task-manager and process information, such as process names, IDs, and resource usage
- clipboard contents when clipboard-related features are enabled and used
- media metadata and playback state for media-control features

Neural Nexus Studios does not receive this content as part of normal app operation. This data is intended to move only between the devices you choose to connect, subject to your network configuration and your use of secure or insecure transport.

## 5. Permissions, Capabilities, And Sensitive Features

NexRemote can access sensitive device capabilities only when the relevant feature is available, declared by the app, and enabled by you or the platform.

Examples include:

- camera access on Android for QR pairing only
- webcam access on Windows for camera enumeration and live camera streaming
- local-network and internet capabilities for discovery, pairing, and remote communication
- background availability, startup behavior, and local firewall configuration on Windows so the host can remain available when enabled by the user
- access to user-selected or app-permitted local files and libraries for file-management and media-related features
- motion-sensor access on Android when motion-based controls are enabled
- screen capture on Android (MediaProjection) only after you tap "Share my screen" and accept Android's capture prompt, with an ongoing notification and Stop button while sharing, and the notification permission on Android 13+ to show it
- the Android Accessibility service "NexRemote PC control", only if you turn on "Allow PC control" and enable the service yourself after an in-app disclosure. It only performs taps, swipes and Back/Home/Recents sent by the PC you are sharing with, only while sharing. It does not read screen content, observe what you type, or collect data

If you do not grant the required consent, disable a feature, or if platform privacy settings block access, the related feature should be unavailable or limited.

## 6. How NexRemote Uses Data

NexRemote uses data only for the following purposes:

- discovering and connecting to a server or client selected by the user
- authenticating, pairing, and maintaining trusted connections
- providing remote-control, streaming, file-management, media-control, clipboard, and gamepad features requested by the user
- storing local preferences, security material, device-trust records, and legal acknowledgements
- troubleshooting, diagnostics, and local security review
- maintaining app reliability and compatibility

NexRemote is not designed to use personal or sensitive data for advertising, profiling, cross-app tracking, resale, or data brokerage.

## 7. Sharing And Disclosure

Neural Nexus Studios does not sell personal or sensitive user data.

Neural Nexus Studios does not share your NexRemote data with advertisers, analytics providers, or unrelated third parties for monetization.

Data may be disclosed only in the following limited ways:

- to the specific Windows host or Android client device that you choose to connect as part of the app’s core functionality
- to platform providers or component providers only to the extent required for normal device or operating-system functionality
- if required by applicable law, lawful process, or a valid governmental request
- in connection with a merger, acquisition, corporate restructuring, or sale of assets, if ever applicable, subject to legally required notice where required

## 8. Security

NexRemote uses platform security features and, where supported, certificate-based trust for secure transport between devices.

However, security depends partly on how you configure the product:

- secure transport features help protect data in transit when secure mode is used
- certificate continuity and fingerprint validation help detect unexpected certificate changes
- some deployments may allow or fall back to insecure local transport, depending on your settings and compatibility choices

If you intentionally use insecure transport, disable secure connection preferences, or expose a device on an untrusted network, your data may be more vulnerable to interception or misuse. You are responsible for reviewing your trusted devices, connection settings, and network environment.

## 9. Retention

NexRemote is designed to retain most data locally until you remove it or uninstall the app.

Based on the current product behavior:

- Windows settings, trusted-device records, certificate files, and legal acknowledgements remain stored locally until you change or remove them, clear app data manually, or uninstall the app
- the Windows operational log is compacted to approximately the most recent 30 days of entries
- any Windows audit log that is enabled may remain stored locally until you delete it, disable logging and remove the file, or uninstall the app
- Android preferences, certificate pins, legal acknowledgements, and custom control layouts remain stored locally until you clear app storage or uninstall the app
- Android device-to-device transfer or cloud backup may copy some local app preferences if Android backup is enabled on the device, but excluded secure stores, databases, and log files are not intended to be included in those backups under the current app configuration
- NexRemote does not maintain a developer-hosted user account database for these apps, so there is no separate cloud retention period for user account content

## 10. Your Choices And Controls

You can generally control your data by:

- choosing whether to install or use NexRemote
- declining legal acceptance or permission prompts and not using the affected feature
- disabling secure or insecure connection options according to your own risk tolerance
- removing trusted devices and disconnecting active sessions
- changing app settings inside the Windows host or Android client
- clearing app data, deleting local files, or uninstalling the app
- using Windows or Android privacy settings to restrict device capabilities such as camera access

Because NexRemote does not currently offer developer-hosted user accounts for these apps, requests to delete server-side account data are generally not applicable. For most users, deletion is accomplished by clearing local app data, removing local trust records, and uninstalling the app.

## 11. Children

NexRemote is not directed to children under 13 and is not designed as a child-directed service. Because NexRemote can expose remote system controls, files, clipboard content, screen content, camera content, and process information, it is intended for teens and adults using devices they own or are authorized to manage.

If you believe a child has provided personal information to Neural Nexus Studios directly in connection with NexRemote, contact us at neural.nex.studios@gmail.com.

## 12. International Use

NexRemote may be used in multiple countries, but you are responsible for using it in compliance with local laws, workplace rules, and device-use policies applicable to you. Nothing in this Privacy Policy limits any mandatory privacy or consumer rights you may have under applicable law.

## 13. Changes To This Privacy Policy

We may update this Privacy Policy to reflect product changes, legal requirements, security updates, or store-policy updates. Updated versions should be published in the app, in the repository, on the official website, and/or in the relevant store listing or distribution materials.

## 14. Contact

If you have privacy questions, legal notices, or support questions related to NexRemote, contact:

Neural Nexus Studios  
Kolkata, West Bengal, India  
Email: neural.nex.studios@gmail.com  
Website: https://avishakeadhikary.github.io/Neural-Nexus-Studios/
