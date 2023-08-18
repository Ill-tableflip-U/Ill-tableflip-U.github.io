console.log("pagefunctions")
var newDiv = document.createElement('div');
newDiv.innerHTML = `

    <div class="fullwhite" id="bannerimage">
        <ul>
            <input class="blackwhite" type="text" style="font-family: themefont;" id="search" name="Search" placeholder="Search" onkeyup="researchpages()" title="Search"></input>
            <img id="searchlogo" src="https://cdn-icons-png.flaticon.com/128/54/54481.png" class="searchlogo" alt="Search"></img>
        </ul>
    <a href="/"><img class="logoimg topmenu" src="https://cdn.discordapp.com/avatars/945974855956848652/30671b4bc0f01a6356e62b81978979a8.webp?size=128" alt="Site logo"></a>
    </div>
`;


var themeselElement = document.querySelector('#themesel');


themeselElement.parentNode.insertBefore(newDiv, themeselElement.nextSibling);





function researchpages() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("PageGlobalList");
    tr = table.getElementsByTagName("tr");
    
    if (input.value.length===0){
        table.style.display="none";
        table.style.backgroundColor = "rgba(0,0,0,0)";
        let sel = false
    } else {
        let sel = true
        table.style.display = "block"
        //table.style.backgroundColor = "white";
        table.style.boxShadow = "2px 5px 5px 2px black"
    }

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                tr[i].style.marginTop
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}












function scrollToElement(id, offset) {
    var element = document.getElementById(id);
    var position = element.offsetTop - offset;
    window.scrollTo({ top: position, behavior: 'smooth' });
}


function closewindow(){
    console.log("closepopup1")
    const divwin = document.getElementById("themesel")
    themesel.style.backgroundColor = "blue"
    
}






document.addEventListener('DOMContentLoaded', function() {


//light/dark transitioning
const banner = document.getElementById("bannerimage")
const resSearch = document.querySelectorAll(".SearchResC")
const popup1 = document.getElementById("themesel");
const searchlist = document.getElementById("PageGlobalList")
const agreementswitch = document.getElementById("acknowledge")
const darkbutton = document.getElementById("darkbutton")
const searchlogo = document.getElementById("searchlogo")

const backgroundlinks = document.querySelectorAll('.backlinks');
function darkchange(){
    searchlist.className = "fullblack"
    searchlist.classList.remove('fullwhite')
    popup1.className = 'a240black'
    popup1.classList.remove("black240a")
    console.log("added dark mode")
    document.body.className = "whiteblack"
    document.body.classList.remove("blackwhite")
    agreementswitch.className = "whiteblack"
    agreementswitch.classList.remove("blackwhite")

    banner.className = "fullblack"
    banner.classList.remove("fullwhite")
    const elements = document.querySelectorAll('.topmenulink');
    
    elements.forEach(element => {
        element.classList.remove('fullwhite');
        element.className = "fullblack topmenu topmenulink"
    });
    backgroundlinks.forEach(element => {
        element.classList.remove('fullwhite');
        element.className = "fullblack backlinks"
    });
    const search = document.getElementById("search")
    search.classList.remove('blackwhite')
    search.className = "whiteblack"
    searchlogo.src = "./img.png"
    console.log("changed theme")
    resSearch.forEach(element => {
        console.log("element1")
        element.classList.remove('fullwhite');
        element.className = "fullblack SearchResC !important"
    });
    
}

const ack = document.getElementById("acknowledge")
ack.addEventListener('click', () => {
    var style = window.getComputedStyle(agreementswitch);
    const themecheck = document.getElementById("acknowledge")
    var bgColor = style.getPropertyValue('background-color');
    document.cookie = "cookieagreement=true"
    if (themecheck.classList.contains("blackwhite")){
        document.cookie = "theme=light"
        console.log("displcookie dark")
    }else{
        if (themecheck.classList.contains("whiteblack")){
            document.cookie = "theme=dark"
            console.log("displcookie dark")
        }else{console.log("failed theme cookies"+bgColor)}
    }
    
    console.log("ack+")
    popup1.classList.remove("displayed")
    popup1.classList.add("removed")
});

darkbutton.addEventListener('click', () => {
    darkchange()
});

function lightchange(){
    searchlist.className = "fullwhite"
    searchlist.classList.remove('fullblack')
    popup1.className = 'black240a'
    backgroundlinks.forEach(element => {
        element.classList.remove('fullblack');
        element.className = "fullwhite backlinks"
    });

    popup1.classList.remove("a240black")
    console.log("added light mode")
    document.body.className = "blackwhite"
    document.body.classList.remove("whiteblack")
    agreementswitch.className = "blackwhite"
    agreementswitch.classList.remove("whiteblack")
    banner.className = "fullwhite"
    banner.classList.remove("fullblack")
    const elements = document.querySelectorAll('.topmenulink');
    elements.forEach(element => {
        element.classList.remove('fullblack');
        element.className = "fullwhite topmenu topmenulink"
    });
    
    const search = document.getElementById("search")
    search.classList.remove('whiteblack')
    search.className = "blackwhite"
    searchlogo.src = "./img2.png"
    resSearch.forEach(element => {
        element.classList.remove('fullblack');
        element.className = "fullwhite SearchResC"
    });
}



lightbutton.addEventListener('click', () => {
    lightchange()
});
const pagelisting = document.getElementById("pagelistbody")
console.log("dsd")
const titles = ["eded"]

const links = ["./site.html"]
const descriptions = ["fdfdf"]
let themecookie = getCookie("theme")
const ackcookie = getCookie("cookieagreement")
//cookie <script>ing

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
console.log("checking logged browser data")




if (getCookie("theme") === "dark") {
    darkchange()
}
if (getCookie("cookieagreement") === "true") {
    var elem = document.getElementById("themesel");
// Remove the element
elem.parentNode.removeChild(elem);
}


console.log("i")
for (i = 0; i < titles.length; i++) {
    console.log(i)
    var tr = document.createElement('tr');
    
    var td = document.createElement('td');
    var a = document.createElement('a');
    a.setAttribute('href', links[i]);
    var button = document.createElement('button');
    if(!document.body.classList.contains("whiteblack")){
        
    button.className = "SearchResC fullwhite searchresultsel"
    }else{
        console.log("else")
        button.className = "SearchResC fullblack searchresultsel"
    }
    button.setAttribute('type', 'button');
    
    var h2 = document.createElement('h2');
    h2.setAttribute('style', 'margin-left: -220px;');
    h2.innerHTML = titles[i];
    var br = document.createElement('br');
    var p = document.createElement('p');
    p.innerHTML = descriptions[i];
    button.appendChild(h2);
    button.appendChild(br);
    button.appendChild(p);
    a.appendChild(button);
    td.appendChild(a);
    tr.appendChild(td)

    pagelisting.appendChild(tr)
}


});
