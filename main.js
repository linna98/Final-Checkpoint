var t=document.getElementById("text")

function changeBold()
{
if(t.style.fontWeight=="normal")
t.style.fontWeight="bold"
else t.style.fontWeight="normal"
}

function changeItalic()
{
if(t.style.fontStyle=="normal")
t.style.fontStyle="italic"
else
t.style.fontStyle="normal"
}

function changeUnderline()
{
if(t.style.textDecoration=="initial")
t.style.textDecoration="underline"
else
t.style.textDecoration="initial"
}

function changeSize()
{
t.style.fontSize=document.getElementById("size").value
}

function changeStyle()
{
t.style.fontFamily=document.getElementById("style").value
}