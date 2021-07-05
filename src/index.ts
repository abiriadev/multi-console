import net from 'net'
import fs from 'fs'
import Console from './class/Console'
import ConsoleClient from './class/ConsoleClient'

const PORT: number = parseInt(fs.readFileSync('./PORT.key').toString())

export { PORT }

export { Console, ConsoleClient }
