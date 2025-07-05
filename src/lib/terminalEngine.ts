type CmdFn = (args: string[]) => string | Promise<string>
export const bannerArt = String.raw`
                                   
 ____              _____     _     
|    \ ___ ___ ___|   | |___| |_   
|  |  | -_| -_| . | | | | -_|  _|  
|____/|___|___|  _|_|___|___|_|    
              |_|                  
                                   
 _____     _     _   _             
|   __|___| |_ _| |_|_|___ ___ ___ 
|__   | . | | | |  _| | . |   |_ -|
|_____|___|_|___|_| |_|___|_|_|___|
                                                  
DeepNetOS v0.1

Type 'help' to begin
`.trim()

export const commands: Record<string, CmdFn> = {
    
  help: () =>
    `Available commands:
  whoami       Show current user
  uname        Display system info
  uptime       Show uptime
  date         Show system date
  clear        Clear the terminal
  banner       Display DeepNet banner
  about        About me
  contact      Contact details
  projects     List current ops
  ping <host>  Simulate ping to a host
  docs         Go to documentation
  scan         Simulate a port scan
  traceroute   Simulate trace route
  log          Show system log entries
  echo <text>  Echo input
  cd <path>    Navigate to a route
  motd         Message of the Day
  fortune      Security fortune
  deploy       Simulated deploy
  status       System status
  ls           List routes
  cd           Navigate to page
  exit         Return home`,

  // ────────────── Identity / System
  whoami: () => 'richard_fisher@deepnet',
  uname: () => 'DeepNet OS v0.1.2-alpha',
  uptime: () => 'System has been running for 72h+',
  date: () => new Date().toString(),
  banner: () => bannerArt,

  // ────────────── Profile & Info
  about: () => 'Web Developer.',
  contact: () =>
    `📧 staff@deepnet.com.au
    📧 richfish85@gmail.com
🐙 github.com/roosdy
🔗 linkedin.com/in/roosdy
🔐 PGP Key Available`,
  projects: () =>
    `📁 KernelCoder   — bash sandbox, limited command shell
📁 Nimbus        — private cloud suite (MVP in progress)
📁 ReelDeal      — smart movie catalog
📁 RedOcean      — OSINT training sim`,
  docs: () => 'View documentation at: /docs',

  // ────────────── Simulated Cyber Tools
  scan: () => `Scanning 127.0.0.1...\nOpen ports: 22 80 443`,
  traceroute: () =>
    `1  192.168.0.1\n2  10.0.0.1\n3  172.16.254.1\n4  deepnet.com.au [127.0.0.1]`,
  log: () => `Jul 03 14:21:05 sshd[1122]: Failed password for root from 127.0.0.1 port 55222`,
  ping: ([host]) =>
    host
      ? `PING ${host} (127.0.0.1) — 32 bytes — time=8ms`
      : 'Usage: ping <host>',

  // ────────────── Utilities
  echo: (args) => args.join(' ') || '',
  motd: () => '“Welcome back, Commander.”',
  fortune: () => '“Complexity is the enemy of security.”',

  // ────────────── DeepNet Specific
  deploy: () => 'Deploying KernelCoder...\n✅ Deploy successful.',
  status: () => '🟢 All systems operational.',
  ls: () =>
    `/docs\n/projects\n/labs\n/about\n/contact`,
  exit: () => 'Returning to home...',

  // ────────────── Already handled
  clear: () => '__CLEAR__',
}

export async function runCmd(input: string): Promise<string> {
  const [cmd, ...args] = input.trim().split(/\s+/)
  if (!cmd) return ''
  if (cmd === 'clear') return '__CLEAR__'
  const fn = commands[cmd]
  if (!fn) return `Command not found: ${cmd}`
  return await fn(args)
}
