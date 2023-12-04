// JavaScript source code

console.log("HELLO");

// pop up box and buttons
let buttonOne = document.getElementById("myButton");
let buttonTwo = document.getElementById("submitButton");
let infoBox = document.getElementById("ad");
let dimBox = document.getElementById("dim");
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let goalInput = document.getElementById("goalInput");

emailInput.required;
infoBox.hidden = true;


buttonTwo.addEventListener("click", function (e) {
    if (emailInput.value.trim() === "" || !emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        alert("To access your meal plan, please input your email address in the form below.");
        return;
    }
    else {
        infoBox.hidden = true;
        dimBox.style.opacity = 1;
        nameInput.value = '';
        emailInput.value = '';
        goalInput.value = '';

        // meal input
        let breakfastInput1 = document.getElementById("breakfastInput1");
        let snack1Input1 = document.getElementById("snack1Input1");
        let lunchInput1 = document.getElementById("lunchInput1");
        let snack2Input1 = document.getElementById("snack2Input1");
        let dinnerInput1 = document.getElementById("dinnerInput1");
        let breakfastInput2 = document.getElementById("breakfastInput2");
        let snack1Input2 = document.getElementById("snack1Input2");
        let lunchInput2 = document.getElementById("lunchInput2");
        let snack2Input2 = document.getElementById("snack2Input2");
        let dinnerInput2 = document.getElementById("dinnerInput2");
        let breakfastInput3 = document.getElementById("breakfastInput3");
        let snack1Input3 = document.getElementById("snack1Input3");
        let lunchInput3 = document.getElementById("lunchInput3");
        let snack2Input3 = document.getElementById("snack2Input3");
        let dinnerInput3 = document.getElementById("dinnerInput3");
        let breakfastInput4 = document.getElementById("breakfastInput4");
        let snack1Input4 = document.getElementById("snack1Input4");
        let lunchInput4 = document.getElementById("lunchInput4");
        let snack2Input4 = document.getElementById("snack2Input4");
        let dinnerInput4 = document.getElementById("dinnerInput4");
        let breakfastInput5 = document.getElementById("breakfastInput5");
        let snack1Input5 = document.getElementById("snack1Input5");
        let lunchInput5 = document.getElementById("lunchInput5");
        let snack2Input5 = document.getElementById("snack2Input5");
        let dinnerInput5 = document.getElementById("dinnerInput5");
        let breakfastInput6 = document.getElementById("breakfastInput6");
        let snack1Input6 = document.getElementById("snack1Input6");
        let lunchInput6 = document.getElementById("lunchInput6");
        let snack2Input6 = document.getElementById("snack2Input6");
        let dinnerInput6 = document.getElementById("dinnerInput6");
        let breakfastInput7 = document.getElementById("breakfastInput7");
        let snack1Input7 = document.getElementById("snack1Input7");
        let lunchInput7 = document.getElementById("lunchInput7");
        let snack2Input7 = document.getElementById("snack2Input7");
        let dinnerInput7 = document.getElementById("dinnerInput7");

        // pop up vars
        let img = document.createElement("img");
        img.src = "PopUpBackground.png";
        var text1 = '<p id="par1">' + breakfastInput1.value + '</p>'
        var text2 = '<p id="par2">' + snack1Input1.value + '</p>'
        var text3 = '<p id="par3">' + lunchInput1.value + '</p>'
        var text4 = '<p id="par4">' + snack2Input1.value + '</p>'
        var text5 = '<p id="par5">' + dinnerInput1.value + '</p>'
        var text6 = '<p id="par6">' + breakfastInput2.value + '</p>'
        var text7 = '<p id="par7">' + snack1Input2.value + '</p>'
        var text8 = '<p id="par8">' + lunchInput2.value + '</p>'
        var text9 = '<p id="par9">' + snack2Input2.value + '</p>'
        var text10 = '<p id="par10">' + dinnerInput2.value + '</p>'
        var text11 = '<p id="par11">' + breakfastInput3.value + '</p>'
        var text12 = '<p id="par12">' + snack1Input3.value + '</p>'
        var text13 = '<p id="par13">' + lunchInput3.value + '</p>'
        var text14 = '<p id="par14">' + snack2Input3.value + '</p>'
        var text15 = '<p id="par15">' + dinnerInput3.value + '</p>'
        var text16 = '<p id="par11">' + breakfastInput4.value + '</p>'
        var text17 = '<p id="par12">' + snack1Input4.value + '</p>'
        var text18 = '<p id="par13">' + lunchInput4.value + '</p>'
        var text19 = '<p id="par14">' + snack2Input4.value + '</p>'
        var text20 = '<p id="par15">' + dinnerInput4.value + '</p>'
        var text21 = '<p id="par11">' + breakfastInput5.value + '</p>'
        var text22 = '<p id="par12">' + snack1Input5.value + '</p>'
        var text23 = '<p id="par13">' + lunchInput5.value + '</p>'
        var text24 = '<p id="par14">' + snack2Input5.value + '</p>'
        var text25 = '<p id="par15">' + dinnerInput5.value + '</p>'
        var text26 = '<p id="par11">' + breakfastInput6.value + '</p>'
        var text27 = '<p id="par12">' + snack1Input6.value + '</p>'
        var text28 = '<p id="par13">' + lunchInput6.value + '</p>'
        var text29 = '<p id="par14">' + snack2Input6.value + '</p>'
        var text30 = '<p id="par15">' + dinnerInput6.value + '</p>'
        var text31 = '<p id="par11">' + breakfastInput7.value + '</p>'
        var text32 = '<p id="par12">' + snack1Input7.value + '</p>'
        var text33 = '<p id="par13">' + lunchInput7.value + '</p>'
        var text34 = '<p id="par14">' + snack2Input7.value + '</p>'
        var text35 = '<p id="par15">' + dinnerInput7.value + '</p>'

        flyWindow = window.open('about:blank', 'myPop', 'width=1940, height = 1100, left=500, top=100');

        flyWindow.document.write('<html>\n<head>\n<title>Meal Plan</title>\n<link rel="stylesheet" href="popUpCSS.css">\n</head>\n<body>\n');
        flyWindow.document.write('<div class="container">');
        flyWindow.document.write('<img src="PopUpBackground.png" alt="Background">');

        flyWindow.document.write('<div class="check1">');
        flyWindow.document.write('<div class="col1">');
        flyWindow.document.write(text1);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check2">');
        flyWindow.document.write('<div class="col1">');
        flyWindow.document.write(text2);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check3">');
        flyWindow.document.write('<div class="col1">');
        flyWindow.document.write(text3);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check4">');
        flyWindow.document.write('<div class="col1">');
        flyWindow.document.write(text4);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check5">');
        flyWindow.document.write('<div class="col1">');
        flyWindow.document.write(text5);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check1">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text6);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check2">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text7);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check3">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text8);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check4">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text9);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check5">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text10);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check1">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text11);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check2">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text12);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check3">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text13);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check4">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text14);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check5">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text15);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check1">');
        flyWindow.document.write('<div class="col4">');
        flyWindow.document.write(text16);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check2">');
        flyWindow.document.write('<div class="col4">');
        flyWindow.document.write(text17);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check3">');
        flyWindow.document.write('<div class="col4">');
        flyWindow.document.write(text18);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check4">');
        flyWindow.document.write('<div class="col4">');
        flyWindow.document.write(text19);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check5">');
        flyWindow.document.write('<div class="col4">');
        flyWindow.document.write(text20);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check6">');
        flyWindow.document.write('<div class="col">');
        flyWindow.document.write(text21);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check7">');
        flyWindow.document.write('<div class="col1">');
        flyWindow.document.write(text22);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check8">');
        flyWindow.document.write('<div class="col1">');
        flyWindow.document.write(text23);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check9">');
        flyWindow.document.write('<div class="col1">');
        flyWindow.document.write(text24);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check10">');
        flyWindow.document.write('<div class="col1">');
        flyWindow.document.write(text25);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');
        //------------------------------------------------------
        flyWindow.document.write('<div class="check6">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text26);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check7">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text27);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check8">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text28);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check9">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text29);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check10">');
        flyWindow.document.write('<div class="col2">');
        flyWindow.document.write(text30);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check6">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text31);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check7">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text32);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check8">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text33);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check9">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text34);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('<div class="check10">');
        flyWindow.document.write('<div class="col3">');
        flyWindow.document.write(text35);
        flyWindow.document.write('</div>');
        flyWindow.document.write('</div>');

        flyWindow.document.write('</div>');
        flyWindow.document.write('</body>\n</html>');
    }
})

// when the first button is clicked, the ad is shown and screen dims
buttonOne.addEventListener('click', function () {
    dimBox.style.opacity = .25;
    infoBox.hidden = false;
})