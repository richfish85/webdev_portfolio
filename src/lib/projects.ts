export const projects = [
  {
    slug: "kernelcoder",
    name: "KernelCoder",
    type: "CLI Sandbox",
    description: "A live Bash playground for practicing Linux commands safely.",
    tags: ["Linux", "Security", "Sandbox"],
    longDescription: `
KernelCoder is a terminal-style web app simulating a Linux environment.
It includes real-time CLI feedback, fake system errors, and interactive walkthroughs for users new to Linux command-line workflows.

Includes:
- Bash command interpreter
- Simulated ` + "`man`, `ls`, `nano`" + ` commands
- Auto-reset sandbox session
- Styled like classic CRT terminals.`,
    website: "#",
    github: "#",
  },
  {
    slug: "nimbus",
    name: "Nimbus",
    type: "Cloud Suite",
    description: "A private cloud toolkit with encrypted storage and deployment dashboard.",
    tags: ["Cloud", "Encryption", "React"],
    longDescription: `
Nimbus provides a full-stack deployment environment for self-hosted apps.
It includes:
- S3-compatible object storage
- Encrypted backup workflows
- Web UI + CLI access
    `,
    website: "#",
    github: "#",
  },
];