   // Lấy nút chuyển chế độ và kiểm tra trạng thái chế độ tối
            const themeToggleButton = document.getElementById("theme-toggle");
            const themeIcon = document.getElementById("theme-icon");

            // Kiểm tra nếu chế độ tối đã được lưu trong localStorage
            if (localStorage.getItem("theme") === "dark") {
                document.body.classList.add("dark-mode");
                themeIcon.src = "img/moon-icon.png";  // Đổi biểu tượng sang mặt trăng
            }

            // Thêm sự kiện click cho nút chuyển chế độ 
            themeToggleButton.addEventListener("click", function () {
                document.body.classList.toggle("dark-mode");

                // Lưu trạng thái chế độ vào localStorage để nhớ khi tải lại trang
                if (document.body.classList.contains("dark-mode")) {
                    localStorage.setItem("theme", "dark");
                    themeIcon.src = "img/sun-icon.png";  // Đổi biểu tượng sang mặt trăng
                } else {
                    localStorage.setItem("theme", "light");
                    themeIcon.src = "img/moon-icon.png";  // Đổi biểu tượng sang mặt trời
                }
            });
           
