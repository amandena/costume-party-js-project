$(document).ready(function(){
  bindClickHandlers()
})

const bindClickHandlers = () => {
  $('.all_parties').on('click', e => {
    e.preventDefault()
    fetch('/costume_parties.json')
      .then(res => res.json())
      .then(parties => {
        $('.content').html('')
        parties.forEach(party => {
          console.log(party)
        })
      })
  })
}
