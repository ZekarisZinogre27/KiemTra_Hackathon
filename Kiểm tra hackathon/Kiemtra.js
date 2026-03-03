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
]
function newStudent() {
    let studentId = prompt("Nhập Id để thêm sinh viên vào danh sách:");
    studentList.forEach(id, name, mathScores, literatureScores, englishScores => {
        if (studentId === id) {
            console.log("Id đã tồn tại. Vui lòng chọn id khác.");
        } else {
            let studentName = prompt("Nhập tên sinh viên bạn muốn thêm:");
            if (studentName == "" || studentName == Number) {
                console.log("Tên sinh viên không được để trống hay nhập số")
            } else {
                let studentMathScore = prompt("Nhập điểm số của môn toán:");
                let studentLiteratureScore = prompt("Nhập điểm số của môn văn:");
                let studentEnglishScore = prompt("Nhập điểm số của môn tiếng anh:");
                if (studentMathScore < 0 || studentMathScore > 10 || studentEnglishScore < 0 || studentEnglishScore > 10 || studentLiteratureScore < 0 || studentLiteratureScore > 10) {
                    console.log("Điểm các môn phải là số từ 0 đến 10")
                } else {
                    let studentAverageScores = ((studentMathScore + studentLiteratureScore + studentEnglishScore) / 3);
                }
            }
        }
    });
    console.log(` Đã thêm sinh viên: ${studentName} Id: ${studentId} thành công!`);
    let action = "active"
}

function deleteStudent() {
    let findWithId = prompt("Nhập id sinh viên mà bạn muốn tìm kiếm");
    studentList.forEach(id => {
        if (findWithId!=id) {
            console.log("Mã sinh viên không tìm thấy(Không tồn tại).");
        } else {
            confirm("Bạn có xác nhận muốn xóa sinh viên đó không?", true || false);
            if (confirm === true) {

            } else {
                continue;
            }
        }
    });
}

function studentStatusList() {
    return studentList, parseInt
}

function updateStudent() {
    
}

function findById() {
    let findById = prompt("Nhập id sinh viên bạn cần tìm kiếm:");
    studentList.forEach(id => {
        if (findById!=id) {
            console.log("Id sinh viên bạn cần tìm không tồn tại.")
        } else {
            console.log(`Id: ${id} | Name: ${name} | mathScores: ${mathScores} | literatureScores: ${literatureScores} | englishScores: ${englishScores} | averageScores: ${averageScores} | action: ${action}`)
        }
    });
    let findByName = prompt("Nhập id sinh viên bạn cần tìm kiếm:");
    studentList.forEach(name => {
        if (findByName!=name) {
            console.log("Tên sinh viên bạn cần tìm không tồn tại.")
        } else {
            console.log(`Id: ${id} | Name: ${name} | mathScores: ${mathScores} | literatureScores: ${literatureScores} | englishScores: ${englishScores} | averageScores: ${averageScores} | action: ${action}`)
        }
    });
}

function averageClassScores() {
    studentList.forEach(averageScores => {
        console.log(`Điểm trung bình của cả lớp: ${averageScores}`)
    });
}

let choose = []
do {
    choose = Number.prompt(` LỰA CHỌN CHỨC NĂNG 
    1. Thêm sinh viên.
    2. Xóa sinh viên.
    3. Hiển thị danh sách sinh viên.
    4.Cập nhật thông tin sinh viên.
    5.Tìm sinh viên.
    6.Phân loại sinh viên.
    7.Tính điểm trung bình của cả lớp.
    8.Sắp xếp sinh viên theo điểm trung bình.
    9.Tìm kiếm sinh viên theo khoảng điểm.
    0.Thoát chương trình.`)
    switch (choose) {
        case 0:
            alert("Thoát chương trình")
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
            alert("Lựa chọn của bạn không hợp lệ!")
            break;
    }
} while (choose !== 0);