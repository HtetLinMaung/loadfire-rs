# LoadFire-RS

LoadFire-RS is a cross-platform Node.js CLI wrapper for the LoadFire Rust application, designed to facilitate load testing across different platforms. This tool ensures that the correct binary version of LoadFire is executed depending on the user's operating system.

## Features

- Easy-to-use command-line interface.
- Cross-platform support, running on Windows, macOS, and Linux.
- Seamlessly handles different binaries for different platforms.
- Ideal for load testing web applications.

## Installation

To install LoadFire-RS, you need Node.js installed on your machine. Then, you can install the tool globally using npm:

```bash
npm install -g loadfire-rs
```

This will install LoadFire-RS and make it available as a command-line tool.

## Usage

To use LoadFire-RS, create a configuration file in YAML format with your load test parameters. An example configuration file might look like this:

```yaml
url: "http://example.com/api"
method: POST
request_count: 100
headers:
  Content-Type: "application/json"
body: '{"key": "value"}'
data_file: "data.xlsx"
```

Run the load test using:

```bash
loadfire-rs -c path/to/your/config.yml
```

Replace `path/to/your/config.yml` with the path to your configuration file.
