
var newDiv = document.createElement('div');
newDiv.innerHTML = `

    <div class="fullwhite" id="bannerimage">
        <ul>
            <input class="blackwhite" type="text" style="font-family: themefont;" id="search" name="Search" placeholder="Search" onkeyup="researchpages()" title="Search"></input>
            <img id="searchlogo" src="https://cdn-icons-png.flaticon.com/128/54/54481.png" class="searchlogo" alt="Search"></img>
        </ul>
    <a href="/"><img class="logoimg topmenu" src="https://th.bing.com/th/id/R.6a2cacc6138177dfd129d7e327dc1060?rik=sw57rJDvOIE%2b1w&riu=http%3a%2f%2fcaps.pictures%2f200%2f1-shrek%2ffull%2fshrek-disneyscreencaps.com-39.jpg&ehk=wEf5lBJv5qBA1UUELwG2rQnWyMynHd1ayz4nVsyqDRw%3d&risl=&pid=ImgRaw&r=0" alt="Site logo"></a>
    </div>
`;


var themeselElement = document.querySelector('#themesel');


themeselElement.parentNode.insertBefore(newDiv, themeselElement.nextSibling);
