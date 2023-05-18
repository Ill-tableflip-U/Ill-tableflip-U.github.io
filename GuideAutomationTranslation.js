
console.log("retrieving guide lists.")
fetch('/config.jsonc')
  .then(response => response.json())
  .then(data => {
    const titles = data.list1;
    const descriptions = data.GuideTitles
    const links = data.GuideLinks
    const cat = data.GuideCategories
    const Cindex = data.CategoryIndex
    const imgs = data.GuideImages
    const guidelist = document.getElementById("Guidelist")
    //subtitles
    for(let i = 0; i <cat.length; i++) {

        
        var tr = document.createElement('tr');
        tr.setAttribute("id", "cat"+i)
        var td1 = document.createElement('td');
        td1.setAttribute('style', 'margin-left: 650px;');
        var h1 = document.createElement('h1');
        h1.setAttribute('id', 'subtitle'+i);
        h1.setAttribute('class', 'pagecontentstatic');
        h1.textContent = cat[i]
        td1.appendChild(h1);

        var td2 = document.createElement('td');
        var table2 = document.createElement('table');
        table2.setAttribute('class', 'listofguides');
        table2.setAttribute('id', cat[i])
        td2.appendChild(table2);

        tr.appendChild(td1);
        tr.appendChild(td2);
        guidelist.appendChild(tr)
    }
    //guides
    for(let i = 0; i <titles.length; i++) {
        var tr = document.createElement('tr');

        var a = document.createElement('a');
        a.setAttribute('href', links[i]);
        a.setAttribute('class', 'anchorlink');
        a.setAttribute('style', 'margin-left: 150px;');

        var button = document.createElement('button');
        button.setAttribute('class', 'guidebutton');

        var h2 = document.createElement('h2');
        h2.textContent = titles[i]



        var h4 = document.createElement('h4');
        h4.textContent = descriptions[i]

        var img = document.createElement('img');
        img.setAttribute('style', 'width: 80px;');
        img.setAttribute('src', imgs[i]);
        img.setAttribute('alt', 'Guide img');

        button.appendChild(h2);
        button.appendChild(h4);
        button.appendChild(img);

        a.appendChild(button);

        tr.appendChild(a);
        var categoryname = cat[Cindex[i]]
        var toaddcategory = document.getElementById(categoryname)
        toaddcategory.appendChild(tr)

    }

});