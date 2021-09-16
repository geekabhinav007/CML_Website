
// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}


$(document).ready(function () {
  // Activate tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Select/Deselect checkboxes
  
  var checkbox = $('table tbody input[type="checkbox"]');
  $("#selectAll").click(function () {
      if (this.checked) {
          checkbox.each(function () {
              this.checked = true;
          });
      }
      else {
          checkbox.each(function () {
              this.checked = false;
          });
      }
  });
  checkbox.click(function () {
      if (!this.checked) {
          $("#selectAll").prop("checked", false);
      }
  });
});