
    document.addEventListener('DOMContentLoaded', function () {
      let currentPage = 1;

      function updatePage() {
        console.log('Updating content for page', currentPage);
      }

      document.getElementById('newer').addEventListener('click', function () {
        if (currentPage > 1) {
          currentPage--;
          updatePage();
        }
      });

      document.getElementById('older').addEventListener('click', function () {
        let totalPageCount = 9; 

        if (currentPage < totalPageCount) {
          currentPage++;
          updatePage();
        }
      });
    });
 