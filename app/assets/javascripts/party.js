$(document).ready(function(){
  bindClickHandlers()
})

const bindClickHandlers = () => { // index & show click handler
  $('.all_parties').on('click', e => {
    e.preventDefault()
    history.pushState(null, null, "costume_parties")
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
  $(document).on('click',".show_link", function(e) {
    e.preventDefault()
    let id = $(this).attr('data-id')
    fetch(`/costume_parties/${id}.json`)
    .then(res => res.json())
    .then(party => {
      console.log(party)
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
    <h4><a href="/costume_parties/${this.id}" class="show_link" data-id="${this.id}">${this.name}</a></h4><br>
    <p>${this.time} p.m.</p>
    <p>${this.date}</p>
    <p>Host: ${this.user.create_username}</p>
  `
  return partyHTML // ---> user is undefined on line 34?
}
