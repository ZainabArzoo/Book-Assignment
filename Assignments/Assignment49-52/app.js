// EVENTS

// 1. Create a signup form and display form data in your web 
// page on submission.








           


// 2. Suppose in your webpage there is content area in which
            // you have entered your item details, but user can only see 
            // some details on first look. When user clicks on “Read 
            // more” button, full detail of that particular item will be 
            // displayed. 

            Sure! Here's an example of how to do this using HTML, CSS, and JavaScript:

            ```html
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Read More Button</title>
                    <style>
                        .item {
                            display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 50px;
		}
                        .item img {
                            width: 300px;
                        height: 300px;
                        object-fit: cover;
                        margin-bottom: 10px;
		}
                        .item .short-desc {
                            max - width: 300px;
                        text-align: center;
                        margin-bottom: 10px;
		}
                        .item .long-desc {
                            display: none;
                        max-width: 300px;
                        text-align: center;
                        margin-bottom: 10px;
		}
                        .item button {
                            background - color: #4CAF50;
                        color: white;
                        padding: 5px 10px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: all 0.3s ease-in-out;
		}
                        .item button:hover {
                            background - color: #3E8E41;
		}
                    </style>
                </head>
                <body>
                    <h1>Items</h1>
                    <div class="item">
                        <img src="item1.jpg" alt="Item 1">
                            <p class="short-desc">Short description of Item 1.</p>
                            <p class="long-desc">Long description of Item 1.</p>
                            <button onclick="toggleDesc(this)">Read More</button>
                    </div>
                    <div class="item">
                        <img src="item2.jpg" alt="Item 2">
                            <p class="short-desc">Short description of Item 2.</p>
                            <p class="long-desc">Long description of Item 2.</p>
                            <button onclick="toggleDesc(this)">Read More</button>
                    </div>
                    <div class="item">
                        <img src="item3.jpg" alt="Item 3">
                            <p class="short-desc">Short description of Item 3.</p>
                            <p class="long-desc">Long description of Item 3.</p>
                            <button onclick="toggleDesc(this)">Read More</button>
                    </div>

                    <script>
                        function toggleDesc(button) {
			const

                        // 3. In previous assignment you have created a tabular data 
                        // using javascript. Let’s modify that. Create a form which 
                        // takes student’s details and show each student detail in 
                        // table. Each row of table must contain a delete button and 
                        // an edit button. On click on delete button entire row should 
                        // be deleted. On click on edit button, a hidden form will 
                        // appear with the values of that row

                        Sure, here's an example of how to create a form that takes student details and displays them in a table with delete and edit buttons:

                        ```html
                        < !DOCTYPE html >
                        <html>
                            <head>
                                <title>Student Details</title>
                                <style>
                                    table {
                                        border - collapse: collapse;
                                    width: 100%;
		}
                                    table th, table td {
                                        border: 1px solid black;
                                    padding: 8px;
                                    text-align: left;
		}
                                    table th {
                                        background - color: #4CAF50;
                                    color: white;
		}
                                    form {
                                        display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    margin-bottom: 20px;
		}
                                    form label, form input {
                                        margin - bottom: 10px;
		}
                                    form input[type="submit"] {
                                        background - color: #4CAF50;
                                    color: white;
                                    padding: 5px 10px;
                                    border: none;
                                    border-radius: 5px;
                                    cursor: pointer;
                                    transition: all 0.3s ease-in-out;
		}
                                    form input[type="submit"]:hover {
                                        background - color: #3E8E41;
		}
                                    form input[type="reset"] {
                                        background - color: #f44336;
                                    color: white;
                                    padding: 5px 10px;
                                    border: none;
                                    border-radius: 5px;
                                    cursor: pointer;
                                    transition: all 0.3s ease-in-out;
                                    margin-left: 10px;
		}
                                    form input[type="reset"]:hover {
                                        background - color: #d32f2f;
		}
                                    .hidden {
                                        display: none;
		}
                                </style>
                            </head>
                            <body>
                                <h1>Student Details</h1>
                                <form id="student-form" onsubmit="addStudent(event)">
                                    <label for="name">Name:</label>
                                    <input type="text" id="name" name="name" required>
                                        <label for="age">Age:</label>
                                        <input type="number" id="age" name="age" required>
                                            <label for="gender">Gender:</label>
                                            <select id="gender" name="gender" required>
                                                <option value=""></option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>





                                // EVENTS
// var signupForm = document.getElementById("signupForm");
// var submittedData = document.getElementById("submittedData");

// signupForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   var name = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var formData = document.createElement("p");
//   formData.textContent =
//  "Name: " + name + "Email: " + email + "Password: " + password;

//   submittedData.appendChild(formData);
//   signupForm.reset();
// });
// var readMoreButtons = document.querySelectorAll(".read-more");
// readMoreButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     var item = button.parentNode;
//     var details = item.querySelector(".details");
//     var summary = item.querySelector(".summary");

//     if (details.style.display === "none") {
//       details.style.display = "block";
//       button.textContent = "Read less";
//     } else {
//       details.style.display = "none";
//       button.textContent = "Read more";
//     }
//   });
// });

