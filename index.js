#!/usr/bin/env node

const Run = require('run-sdk')

const blockchain = new Run.plugins.WhatsOnChain({ network: 'main' })

const run = new Run({ blockchain });

if (require.main === module) {

  (async () => {

      try {

          const hex = process.argv[2]

          if (!hex) {

              console.error('usage: broadcast-transaction <transaction-hex>')
              console.error('       // returns txid as string')

              process.exit(1)
          }

          const result = await run.blockchain.broadcast(hex)
      
          console.log(result)
      
      } catch(error) {
      
          console.error(error)
      }
      
  })()

} else {

  module.exports = function(hex) {
    return run.blockchain.broadcast(hex)
  }

}
