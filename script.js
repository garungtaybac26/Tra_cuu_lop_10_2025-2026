// Lắng nghe sự kiện "Enter" trên ô input
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('studentNameInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchStudent();
        }
    });
});

function searchStudent() {
    const inputName = document.getElementById('studentNameInput').value.trim().toUpperCase();
    const resultsDiv = document.getElementById('results-container');
    resultsDiv.innerHTML = ''; // Xóa kết quả cũ

    if (inputName === '') {
        resultsDiv.innerHTML = '<p style="text-align: center;">Vui lòng nhập họ và tên học sinh.</p>';
        return;
    }

    const foundStudents = studentData.filter(student => {
        // Tạo tên đầy đủ từ Họ đệm và Tên
        const fullName = `${student["Họ đệm"]} ${student["Tên"]}`.toUpperCase();
        // Kiểm tra xem tên đầy đủ có khớp với tên nhập vào không
        return fullName === inputName;
    });

    if (foundStudents.length > 0) {
        foundStudents.forEach(student => {
            const resultHtml = `
                <div class="result">
                    <p><strong>STT:</strong> ${student["STT"]}</p>
                    <p><strong>Họ và tên:</strong> ${student["Họ đệm"]} ${student["Tên"]}</p>
                    <p><strong>Ngày sinh:</strong> ${student["Ngày sinh"]}</p>
                    <p><strong>Giới tính:</strong> ${student["giới tính"]}</p>
                    <p><strong>Dân tộc:</strong> ${student["Dân tộc"]}</p>
                    <p><strong>Lớp:</strong> ${student["Lớp"]}</p>
                    <p><strong>Học sinh trường:</strong> ${student["Học sinh trường"]}</p>
                    <p><strong>Môn học bắt buộc:</strong> ${student["Môn học và hoạt động giáo dục bắt buộc"]}</p>
                    <p><strong>Môn học lựa chọn:</strong> ${student[" Môn học lựa chọn"]}</p>
                    <p><strong>Chuyên đề lựa chọn:</strong> ${student["Chuyên đề lựa chọn"]}</p>
                </div>
            `;
            resultsDiv.innerHTML += resultHtml;
        });
    } else {
        resultsDiv.innerHTML = `<p style="text-align: center; color: red;">Không tìm thấy học sinh có tên "${inputName}".</p>`;
    }
}