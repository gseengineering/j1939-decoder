# J1939 Decoder

## Project Overview
A web-based tool for decoding J1939 CAN (Controller Area Network) identifiers, allowing engineers and developers to break down and analyze J1939 protocol message IDs.

## Features
- Decode J1939 CAN IDs from hexadecimal input
- Extract and display key components:
  - Priority
  - Parameter Group Number (PGN)
  - Source Address
- Real-time decoding with intuitive user interface

## Repository Information
- **GitHub Repository**: [gseengineering/j1939-decoder](https://github.com/gseengineering/j1939-decoder)
- **Live Demo**: [J1939 Decoder](https://gseengineering.github.io/j1939-decoder)

## Technical Details
- Built with React
- Styled with Tailwind CSS
- Hosted on GitHub Pages

## Development Setup

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/gseengineering/j1939-decoder.git
   cd j1939-decoder
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm start
   ```

## Deployment
Deploy the project to GitHub Pages:
```bash
npm run deploy
```

## J1939 Decoding Logic
The decoder breaks down a J1939 CAN ID into its core components:
- **Priority** (3 bits): Message transmission priority
- **PGN** (18 bits): Parameter Group Number identifying the message type
- **Source Address** (8 bits): Identifying the message origin

### Example Decoding
Input: `0CFF0019`
- Priority: `0x3` (3)
- PGN: `0x0FF0` (4080)
- Source Address: `0x19` (25)

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## License
MIT License

Copyright (c) 2024 GSE Engineering

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
