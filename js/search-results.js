document.getElementById('search-button').addEventListener('click', function() {
  const searchValue = document.getElementById('search-input').value;
  const filterValue = document.getElementById('filter').value;
  if (searchValue.trim() === '') { 
    // Hiển thị thông báo nếu ô tìm kiếm trống 
    alert('Vui lòng nhập dữ liệu để tìm kiếm.'); return; }
  performSearch(searchValue, filterValue);
  document.getElementById('search-input').value = ''; 
  document.getElementById('filter').selectedIndex = 0;
});

function performSearch(query, category) {
  const data = [
      { name: 'Tài liệu Toán CNTT', category: 'Tài liệu', link: 'tl_toan_cntt.html' },
      { name: 'Sublime Text', category: 'Phần mềm', link: 'sublimetext.html' },
      { name: 'Code Block', category: 'Phần mềm', link: 'codeblock.html' },
      { name: 'Tài liệu HTML cơ bản', category: 'Tài liệu', link: 'tailieuhtmlcoban.html' },
      { name: 'Tài liệu C++ cơ bản', category: 'Tài liệu', link: 'tailieuc++coban.html' },
      { name: 'Tài liệu Java Script', category: 'Tài liệu', link: 'tl_jv.html' },
      { name: 'Tài liệu Tiếng Anh chuyên ngành CNTT', category: 'Tài liệu', link: 'tl_chuyen_nganh_cntt.html' },
      { name: 'Tài liệu một số môn học khác', category: 'Tài liệu', link: 'khác.html' },
      { name: 'Các kiến thức thêm về CNTT', category: 'thêm', link: 'khampha.html' },
      { name: 'Video về sự phát triển của khoa học ngày nay', category: 'thêm', link: 'mp4.html' },
      { name: 'Bảng so sánh các ngôn ngữ lập trình hiện nay', category: 'thêm', link: 'bảng.html' },
      // Thêm các mục khác nếu có
  ];

  const results = data.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) && 
      item.category === category
  );

  displayResults(results);
}

function displayResults(results) {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
      resultsContainer.textContent = 'Không tìm thấy kết quả phù hợp.';
      return;
  }

  results.forEach(result => {
      const resultElement = document.createElement('a');
      resultElement.textContent = result.name;
      resultElement.href = result.link;
      resultElement.classList.add('result-item'); // Thêm class nếu muốn trang trí bằng CSS
      resultsContainer.appendChild(resultElement);
  });
}

// Ẩn kết quả tìm kiếm khi không di chuột vào ô tìm kiếm 
  const searchContainer = document.querySelector('.search-container'); 
  searchContainer.addEventListener('mouseover', () => { document.getElementById('search-results').style.display = 'block'; }); 
  searchContainer.addEventListener('mouseleave', () => { document.getElementById('search-results').style.display = 'none'; });
