$(document).ready(function () {
  washList();
});

function washList() {
  $.ajax({
    type: "GET",
    url: "api/wash_list",
    data: {},
    success: function (response) {
      const rows = response.data;
      console.log("π₯π₯π₯ rows π₯π₯π₯", rows);
      for (let i in rows) {
        let extra = rows[i].extra;
        let image = rows[i].image;
        let wash_id = rows[i].wash_id;
        console.log("π₯π₯π₯ wash_id π₯π₯π₯", rows[i].wash_id);
        // let status = rows[i].status;
        // status = 1;
        let temp_html = `
        <div class="wash_list">
        <img
        src="https://experiencelife.lifetime.life/wp-content/uploads/2022/06/ja22-we-sweat-clothes-smell-worse-than-others.jpg"
        alt=""
        />
        <div class="wash_list_bottom">
            <input type="hidden" class="wash_id" value="${wash_id}" />
            <p class="extra">
            ${extra}
            </p>
              <input
              class="wash_btn"
              type="button"
              name="wash_start"
              value="μΈν μ§ννκΈ°"
              />
            </div>
            </div>
            `;
        $("#washListId").append(temp_html);
      }
    },
  });
}

const body = document.querySelector("body");
body.addEventListener("click", function (e) {
  if (e.target.classList[0] != "wash_btn") return;
  const wash_id = e.target.parentElement.children[0].value;
  const status = 0;

  $.ajax({
    type: "PUT",
    url: "/api/wash_list",
    data: { wash_id, status }, // = > controller(req.body)
    success: function (response) {
      // const clickWash_id = response.wash_id.split(" ")[0];
      console.log("π₯π₯π₯ response π₯π₯π₯", response.wash_id);
      alert("μΈνλ¬Ό μ νμ΄ μλ£λμμ΅λλ€!");
      location.href =
        "http://localhost:4000/shop_wash_status?id=" + response.wash_id;

      // < = controller return
      // const message = response.data.message;
    },
    error: function (error) {
      alert("μλͺ»λ μ κ·Όμλλ€.");
      console.log(error);
    },
  });
});
