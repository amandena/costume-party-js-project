$(document).ready(function(){
  bindClickHandlers()
})

const bindClickHandlers = () => { // costume_party index click handler
  $('.all_parties').on('click', e => {
    e.preventDefault()
    fetch('/costume_parties.json')
      .then(res => res.json())
      .then(parties => {
        $('.content').html('')
        parties.forEach(party => {
          let newParty = new CostumeParty(party)
          console.log(newParty)
        })
      })
  })
}

function CostumeParty(party) { // costume_party constructor function
  this.id = party.id
  this.name = party.name
  this.date = party.date
  this.time = party.time
  this.user = party.user
}
