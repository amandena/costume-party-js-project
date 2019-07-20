$(document).ready(function(){
  bindClickHandlers()
})

const bindClickHandlers = () => { // index click handler
  $('.all_parties').on('click', e => {
    e.preventDefault()
    fetch('/costume_parties.json')
      .then(res => res.json())
      .then(parties => {
        $('.content').html('')
        parties.forEach(party => {
          let newParty = new CostumeParty(party)
          let partyHTML = newParty.formatIndex()
          $('.content').append(partyHTML)
        })
      })
  })
}

function CostumeParty(party) { // constructor function
  this.id = party.id
  this.name = party.name
  this.date = party.date
  this.time = party.time
  this.user = party.user
}

CostumeParty.prototype.formatIndex = function() { // index prototype function
  let partyHTML = `
    <h4>${this.name}</h4>
    <p>${this.time} p.m.</p>
    <p>${this.date}</p>
    <p>Host: ${this.user.create_username}</p>
  `
  return partyHTML // ---> user is undefined on line 34?
}
