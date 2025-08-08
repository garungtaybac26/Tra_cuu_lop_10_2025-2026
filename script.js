function searchStudent() {
    const inputName = document.getElementById('studentNameInput').value.trim().toUpperCase();
    const resultsDiv = document.getElementById('results-container');
    resultsDiv.innerHTML = ''; // Xóa kết quả cũ

    if (inputName === '') {
        resultsDiv.innerHTML = '<p style="text-align: center;">Vui lòng nhập tên học sinh.</p>';
        return;
    }

    const foundStudents = studentData.filter(student => {
        const fullName = `${student["Họ đệm"]} ${student["Tên"]}`.toUpperCase();
        // Kiểm tra xem tên đầy đủ nhập vào có chứa tên trong dữ liệu hay không
        return fullName.includes(inputName);
    });

    if (foundStudents.length > 0) {
        foundStudents.forEach(student => {
            const resultHtml = `
                <div class="result">
                    <p><strong>Họ và tên:</strong> ${student["Họ đệm"]} ${student["Tên"]}</p>
                    <p><strong>Ngày sinh:</strong> ${student["Ngày sinh"]}</p>
                    <p><strong>Giới tính:</strong> ${student["Giới tính"]}</p>
                    <p><strong>Lớp:</strong> ${student["Lớp"]}</p>
                    <p><strong>HS Trường THCS:</strong> ${student["HS Trường THCS"]}</p>
                </div>
            `;
            resultsDiv.innerHTML += resultHtml;
        });
    } else {
        resultsDiv.innerHTML = '<p style="text-align: center;">Không tìm thấy học sinh nào có tên đã nhập.</p>';
    }
}