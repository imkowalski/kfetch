#!/usr/bin/env node
import chalk from 'chalk';
import os from 'os';
let args = process.argv.slice(2);
const log = console.log;
const buffer_len = 5;
const aqua = chalk.hex("#62d1b2");
const w = chalk.whiteBright;

if (args[0] == "-h" || args[0] == "--help") {
    log(help())
} else {
    const emoji = " ".repeat(buffer_len)+"•ᴗ•"+" ".repeat(buffer_len);
    const hostname = os.hostname();
    const user = os.userInfo().username;
    const ram = Math.round(os.totalmem()/Math.pow(1024,3)) + " GB";
    const cpu = os.cpus()[0].model.split(" ").slice(0,3).join(" ");
    const uptime = Math.floor(Math.floor(os.uptime()/60)/60) + " Hours and " + Math.floor((os.uptime()/60)%60)+" Minutes";
    const host = os.version();
    const buffer = " ".repeat(emoji.length)
    log(buffer+chalk.white("Welcome to ")+aqua(hostname)+w(", ")+aqua(user)+"\n")
    log(buffer+chalk.white("host  ")+chalk.cyan(" ==>  ")+w(host))
    log(chalk.hex("#d99ce6")(emoji)+chalk.white("cpu   ")+chalk.cyan(" ==>  ")+w(cpu))
    log(buffer+chalk.white("ram   ")+chalk.cyan(" ==>  ")+w(ram))
    log(buffer+chalk.white("uptime")+chalk.cyan(" ==>  ")+w(uptime))
}