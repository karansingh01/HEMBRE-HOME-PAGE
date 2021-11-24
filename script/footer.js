 document.write(`
    <footer>

      <div class="footer-container-one">
      </div>

      <div class="footer-container-two">


        <div class="contact">

          <p>Mail: pal.hembre@gmail.com</p>
          <p>Phone: +47 42069666</p>
          <p>Fax: +47 323 555 1234</p>

        </div>

        <section class="follow_us_container">

        <div>
        <h5 class="follow_us">Follow us:</h5>
        <a href="https://www.facebook.com/teamhembre" target="_blank" class="fa fa-facebook"></a>
        </div>

       </section>


        <div class="nationalStat">

          <a href="http://www.fsu.no/issf/index.htm" target=" ">Link to national pistol statistics: fsu.no</a>

         </div>


      </div>

    </footer>`)

 function makeFooter() {
   const footer = document.querySelector(".footer-container-one") // Global variable that refers to element in HTML
   footer.innerHTML = ""
   for (let i in shooters) {
     if (shooters[i].isShown) {

       const listDiv = document.createElement('div')
       const ul = document.createElement('ul')
       const p = document.createElement('p')
       const liName = document.createElement('li')
       p.appendChild(makePersonLink(shooters[i].id))
       liName.appendChild(p)
       ul.appendChild(liName)

       for (let j in shooters[i].stasticsLinks) {
         const element = shooters[i].stasticsLinks[j]
         const a = document.createElement('a')
         const liLinks = document.createElement('li')

         a.innerHTML = element[1]
         a.href = element[0]
         a.className = 'active'
         a.target = " "
         liLinks.appendChild(a)
         ul.appendChild(liLinks)
       }
       listDiv.appendChild(ul)
       footer.appendChild(listDiv)
     }
   }
   footer.innerHTML += `
        </div>

          <ul>
            <li><p id="footer_contact"><a href="contact.html">Contact</a></p></li>
          </ul>

        </div>
      `
 }
 makeFooter()
