$(document).ready(function(){
  bindClickHandlers()
})

const bindClickHandlers = () => { // index, show, & form click handlers
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
  $(document).on('click', ".show_link", function(e) {
    e.preventDefault()
    let id = $(this).attr('data-id')
    history.pushState(null, null, `costume_parties/${id}`)
    $('.content').html('')
    fetch(`/costume_parties/${id}.json`)
    .then(res => res.json())
    .then(party => {
      let newParty = new CostumeParty(party)
      let partyHTML = newParty.formatShow()
      $('.content').append(partyHTML)
    })
  })
  $('#new_costume_party').on('submit', function(e) {
    e.preventDefault()
    const values = $(this).serialize()
    $.post('/costume_parties', values).done(function(data) {
      history.pushState(null, null, `${data['id']}`) // showing as undefined
      $('.content').html('')
      const newParty = new CostumeParty(data)
      const htmlToAdd = newParty.formatShow()
      $('.content').html(htmlToAdd)
    })
  })
}

function CostumeParty(party) { // constructor function
  this.id = party.id
  this.name = party.name
  this.date = party.date
  this.time = party.time
  this.user = party.user
  this.costumes = party.costumes
}

CostumeParty.prototype.formatIndex = function() { // index prototype function
  let partyHTML = `
    <h4><a href="/costume_parties/${this.id}" class="show_link" data-id="${this.id}">${this.name}</a></h4><br>
    <p>${this.time} p.m.</p>
    <p>${this.date}</p>
    <p>Host: ${this.username()}</p>
  `
  return partyHTML
}

CostumeParty.prototype.username = function() { // creates username from user's email
  let email = this.user['email']
  let name = email.split('@', 1)
  return name //--- have to figure out how to capitalize name
}

CostumeParty.prototype.formatShow = function() { // show prototype function
  let partyHTML = `
    <h2>${this.name}</h2>
    <p>${this.time} p.m.</p>
    <p>${this.date}</p>
    <p>Host: ${this.username()}</p>

    ${this.costumes ? `<h3>Costumes:</h3>${this.costumes.map(costume => {return costume.name})}` : ''}

    <h3>Best Costume: </h3>${this.bestCostume()}

    <p><a href="/costume_parties">VIEW PARTIES</a></p><br>
    <p><a href="/costume_parties/${this.id}/costumes/new">CREATE A NEW COSTUME</a></p><br>
  `
  return partyHTML //--- need help with 78, 80, 85
}

const bestCostume = () => {

}
