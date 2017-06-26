<template>
  <div class="about">
    <h2>我的档案</h2>
    <div class="info">
      <table>
        <tbody>
          <tr><th>基本信息：</th></tr>
        </tbody>
      </table>
    <!--</div>
    <div>-->
       <table class="personTable">
         <tbody>
          <tr><td>性&nbsp;别：</td><td>男</td></tr>
          <tr><td>生&nbsp;日：</td><td>1990年1月1日</td></tr>
          <tr><td>职&nbsp;业：</td><td>职员</td></tr>
          <tr><td>现居地：</td><td>广东-广州</td></tr>
          <tr><td>家&nbsp;乡：</td><td>广东-广州</td></tr>
         </tbody>
       </table>
    </div>
    <hr />
    <h2>个人简介</h2>
    <div class="blog_a">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <p>Atque hic inventore magnam libero autem, vitae rem. </p>
      <p>Totam excepturi accusantium minima quasi quod illum cum neque, consequatur impedit, ratione. Quo, tempora.</p>
    </div>
    <hr />
    <h2>给我留言</h2>
    <div class="postmsg">
      <form action="" method="POST" onsubmit="">
        <textarea class="message"></textarea>
        <input type="submit" name="submit" value="发留言">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myarticle'
}

</script>

<style scoped>
.about {
    line-height: 22px;
    margin: 20px;
}

.about h2 {
    font-size: 22px;
    font-family: inherit;
    margin: 15px 0 20px;
    color: #524249;
}

.about p {
    margin-bottom: 15px
}

.blog_a {
    color: #333
}

.info,
.blog_a,
.postmsg {
  margin-left: 10px;
}

table,
td, 
th {
    margin: 0;
    padding: 0;
}

table {
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
    color: #333;
}

.personTable {
    margin-bottom: 15px;
}

textarea {
    width: 100%;
    height: 150px;
    border: 1px solid #999494;
}

form input[type="submit"] {
    font-size: 16px;
    -webkit-appearance: button;
    -moz-appearance: button;
    cursor: pointer;
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
    text-align: center;
    border-radius: 4px;
    line-height: 1.5em;
    width: 10%;
}

</style>
