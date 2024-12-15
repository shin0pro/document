// search-results.js

// Lấy từ khóa tìm kiếm từ URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("query");  // Lấy giá trị của query từ URL

// Dữ liệu giả lập cho kết quả tìm kiếm
const searchData = [
    { title: "Trang chủ", link: "index.html" },
    { title: "Sublime Text", link: "sublimetext.html" },
    { title: "Code Block", link: "codeblock.html" },
    { title: "Tài liệu HTML cơ bản", link: "tailieuhtmlcoban.html" },
    { title: "Tài liệu C++ cơ bản", link: "tailieuc++coban.html" },
    { title: "Tài liệu Toán CNTT", link: "tl_toan_cntt.html" },
    { title: "Tài liệu Java Script", link: "tl_jv.html" },
    { title: "Tài liệu Tiếng Anh chuyên ngành CNTT", link: "tl_chuyen_nganh_cntt.html" },
    { title: "Tài liệu một số môn khác", link: "khác.html" },
    { title: "Các kiến thức thêm về CNTT", link: "khampha.html" },
    { title: "Bảng so sánh các ngôn ngữ lập trình hiện nay", link: "bảng.html" },
    { title: "Video về sự phát triển của khoa học ngày nay", link: "mp4.html" },
    { title: "upload", link: "upload.html" },
];

// Lọc kết quả tìm kiếm dựa trên từ khóa
const filteredData = searchData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
);

const searchResults = document.getElementById("search-results");

if (filteredData.length > 0) {
    // Hiển thị các kết quả tìm kiếm
    filteredData.forEach(item => {
        const resultItem = document.createElement("div");
        resultItem.innerHTML = `<a href="${item.link}">${item.title}</a>`;
        searchResults.appendChild(resultItem);
    });
} else {
    searchResults.innerHTML = "<p>Không tìm thấy kết quả phù hợp.</p>";
}
