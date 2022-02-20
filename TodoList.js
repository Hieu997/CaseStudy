class TodoList {
  constructor() {
    this.arr = [];
    this.x = 0;
  }
  //hiển thị giá trị
  createValue() {
    let value = document.getElementById("todo-input").value;
    if (value == "") {
      alert("Bạn chưa nhập giá trị!");
    } else {
      this.arr.push(value);
    }
    this.showValue();
  }
  showValue() {
    this.showvalue = "";
    for (let i = 0; i < this.arr.length; i++) {
      this.showvalue += "<span>" + (i + 1) + ". " + this.arr[i] + "</span>";
      this.showvalue +=
        "<button class='buttonEdit'  onclick='ButtonEdit(" +
        i +
        ")'>Edit</button>" +
        "&nbsp;&nbsp;";
      this.showvalue +=
        "<button class='buttonDelete' onclick='buttonDelete(" +
        i +
        ")'>Delete</button>";
      this.showvalue += "<br/>" + "<br/>";
    }
    document.getElementById("todo-list").innerHTML = this.showvalue;
  }
  //tạo nút bấm thêm giá trị
  add() {
    this.createValue();
    document.getElementById("todo-input").value = "";
  }
  //tạo nút chỉnh sửa giá trị
  edit(index) {
    this.newvalue = prompt("Giá trị cần sửa là:");
    if (this.newvalue == "") {
      alert("Bạn chưa nhập giá trị!");
    } else {
      this.arr[index] = this.newvalue;
    }
    this.showValue();
  }
  //tạo nút xoá giá trị
  delete(index) {
    if (confirm("Bạn có muốn xoá giá trị này không?")) {
      this.arr.splice(index, 1);
      this.showValue();
    }
  }
}
