console.log('Main loaded')


const gradeChart = document.querySelector('.grade-chart')
const studentEL = document.querySelector('.students')
let courseChart

fetch('https://mbo-sd.nl/apiv2/student-grades')
.then(myData => myData.json())
.then(jsonData => showStudents(jsonData));

function showStudents(jsonData) {
    console.log(jsonData);
    const studentGradeMap = createStudentGradeMap(jsonData.grades)
    for (let i = 0; i < jsonData.students.length; i++) {
        const student = jsonData.students[i];
        studentEL.appendChild(createCard(student, studentGradeMap.get(student.id)))
    }
}

function createStudentGradeMap(grades) {
    console.log(grades)
    const studentGradeMap = new Map()
    for (key in grades) {
        studentGradeMap.set(parseInt(key), grades[key])
    } 
    console.log(studentGradeMap)
    return studentGradeMap
}

function createCard(student, grades) {
    const col = document.createElement('div');
    col.classList.add('col-md-4')
    const card = document.createElement('div')
    card.classList.add('card')
    const image = document.createElement('img')
    image.classList.add('card-img-top')
    image.src = 'holder.js/100x180/'
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    const h4 = document.createElement('h4')
    h4.classList.add('card-title')
    h4.textContent = student.name
    const p = document.createElement('p')
    p.classList.add('card-text')
    const button = document.createElement('button')
    button.classList.add('btn' , 'btn-primary')
    button.textContent = 'button'
    button.addEventListener('click', function() {
        console.log(student.name)
        console.log(grades)
        showGradeChart(grades)
        document.querySelector('.student').textContent = "Student: " + student.name
        document.querySelector('.student-id').textContent = "Student id: " + student.id
        document.querySelector('.student-email').textContent = "E-mail: " + student.email
    })
    
    col.appendChild(card)
    card.appendChild(image)
    card.appendChild(cardBody)
    card.appendChild(button)
    cardBody.appendChild(h4)
    cardBody.appendChild(p)

    return col

//     const card = `<div class="col-md-4">
//     <div class="card">
//         <img class="card-img-top" src="holder.js/100x180/" alt="Title">
//         <div class="card-body">
//             <h4 class="card-title">${student.name}</h4>
//             <p class="card-text">Text</p>
//         </div>
//         <button type="button" class="btn btn-primary">Button</button>
//     </div>
// </div>`;
// return card;
}

function showGradeChart(grades) {
    const labels = [];
    const data = [];
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i];
        if (grade.periode ==  1) {
            labels.push(grade.course_id)
            data.push(grade.grade)
        }
    }
    console.log(labels)
    console.log(data)
    if (courseChart) {
        courseChart.destroy()
    }
    courseChart = createChart(labels, data)
}

function createChart(labels, data) {
    return new Chart(gradeChart, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: '# of Votes',
            data: data,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}