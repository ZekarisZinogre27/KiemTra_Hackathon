let studentList = [
    {
        id: 1,
        name: "Trần Đức Mạnh",
        mathScores: 8,
        literatureScores: 6,
        englishScores: 10,
        averageScores: 8,
        action: "inactive"
    },
    {
        id: 2,
        name: "Lê Trung Sơn",
        mathScores: 10,
        literatureScores: 6,
        englishScores: 8,
        averageScores: 8,
        action: "active"
    },
    {
        id: 3,
        name: "Nghiêm Đình Bình",
        mathScores: 6,
        literatureScores: 8,
        englishScores: 7,
        averageScores: 7,
        action: "inactive"
    },
    {
        id: 4,
        name: "Bùi Nguyên Bảo",
        mathScores: 6,
        literatureScores: 8,
        englishScores: 7,
        averageScores: 7,
        action: "active"
    },
    {
        id: 5,
        name: "Trần Vũ Nam",
        mathScores: 6,
        literatureScores: 8,
        englishScores: 7,
        averageScores: 7,
        action: "active"
    }
];

function newStudent() {
    let studentId = Number(prompt("Nhập Id để thêm sinh viên vào danh sách:"));

    let exist = studentList.find(student => student.id === studentId);
    if (exist) {
        console.log("Id đã tồn tại. Vui lòng chọn id khác.");
        return;
    }

    let studentName = prompt("Nhập tên sinh viên bạn muốn thêm:");
    if (!studentName || !isNaN(studentName)) {
        console.log("Tên sinh viên không được để trống hay nhập số");
        return;
    }

    let studentMathScore = Number(prompt("Nhập điểm số của môn toán:"));
    let studentLiteratureScore = Number(prompt("Nhập điểm số của môn văn:"));
    let studentEnglishScore = Number(prompt("Nhập điểm số của môn tiếng anh:"));

    if (
        studentMathScore < 0 || studentMathScore > 10 ||
        studentLiteratureScore < 0 || studentLiteratureScore > 10 ||
        studentEnglishScore < 0 || studentEnglishScore > 10
    ) {
        console.log("Điểm các môn phải là số từ 0 đến 10");
        return;
    }

    let studentAverageScores =
        (studentMathScore + studentLiteratureScore + studentEnglishScore) / 3;

    studentList.push({
        id: studentId,
        name: studentName,
        mathScores: studentMathScore,
        literatureScores: studentLiteratureScore,
        englishScores: studentEnglishScore,
        averageScores: studentAverageScores,
        action: "active"
    });

    console.log(`Đã thêm sinh viên: ${studentName} Id: ${studentId} thành công!`);
}

function deleteStudent() {
    let findWithId = Number(prompt("Nhập id sinh viên mà bạn muốn tìm kiếm"));

    let index = studentList.findIndex(student => student.id === findWithId);

    if (index === -1) {
        console.log("Mã sinh viên không tìm thấy (Không tồn tại).");
        return;
    }

    let confirmDelete = confirm("Bạn có xác nhận muốn xóa sinh viên đó không?");
    if (confirmDelete) {
        studentList.splice(index, 1);
        console.log("Đã xóa sinh viên thành công.");
    }
}

function studentStatusList() {
    console.table(studentList);
}

function updateStudent() {
}

function findById() {
    let findId = Number(prompt("Nhập id sinh viên bạn cần tìm kiếm:"));

    let student = studentList.find(s => s.id === findId);

    if (!student) {
        console.log("Id sinh viên bạn cần tìm không tồn tại.");
    } else {
        console.log(`Id: ${student.id} | Name: ${student.name} | mathScores: ${student.mathScores} | literatureScores: ${student.literatureScores} | englishScores: ${student.englishScores} | averageScores: ${student.averageScores} | action: ${student.action}`);
    }

    let findName = prompt("Nhập tên sinh viên bạn cần tìm kiếm:");

    let studentByName = studentList.find(s => s.name === findName);

    if (!studentByName) {
        console.log("Tên sinh viên bạn cần tìm không tồn tại.");
    } else {
        console.log(`Id: ${studentByName.id} | Name: ${studentByName.name} | mathScores: ${studentByName.mathScores} | literatureScores: ${studentByName.literatureScores} | englishScores: ${studentByName.englishScores} | averageScores: ${studentByName.averageScores} | action: ${studentByName.action}`);
    }
}

function averageClassScores() {
    let total = 0;

    studentList.forEach(student => {
        total += student.averageScores;
    });

    let average = total / studentList.length;

    console.log(`Điểm trung bình của cả lớp: ${average}`);
}

let choose;

do {
    choose = Number(prompt(` LỰA CHỌN CHỨC NĂNG 
    1. Thêm sinh viên.
    2. Xóa sinh viên.
    3. Hiển thị danh sách sinh viên.
    4. Cập nhật thông tin sinh viên.
    5. Tìm sinh viên.
    6. Phân loại sinh viên.
    7. Tính điểm trung bình của cả lớp.
    8. Sắp xếp sinh viên theo điểm trung bình.
    9. Tìm kiếm sinh viên theo khoảng điểm.
    0. Thoát chương trình.`));

    switch (choose) {
        case 0:
            alert("Thoát chương trình");
            break;
        case 1:
            newStudent();
            break;
        case 2:
            deleteStudent();
            break;
        case 3:
            studentStatusList();
            break;
        case 4:
            updateStudent();
            break;
        case 5:
            findById();
            break;
        case 6:
            break;
        case 7:
            averageClassScores();
            break;
        case 8:
            break;
        case 9:
            break;
        default:
            alert("Lựa chọn của bạn không hợp lệ!");
            break;
    }

} while (choose !== 0);
