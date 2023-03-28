function calculateAge() {
    const dobElement = document.getElementById("dob");
    const ageElement = document.getElementById("age");
  
    const dobValue = new Date(dobElement.value);
    const today = new Date();
  
    let age = today.getFullYear() - dobValue.getFullYear();
    const monthDiff = today.getMonth() - dobValue.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobValue.getDate())) {
        age--;
    }
  
    ageElement.value = age;
  }
  $(document).ready(function()
{
    $("#submit").click(function(){
        var age = $("#age").val();
        var contact = $("#contact").val();
        var op = $("#op").val();

        $.ajax({
            url: 'profile.php',
            type: 'post',
            data: {
                age: age,
                contact:contact,
                op: op
            },
            success: function(response) {
                if (response.includes('success')) {
                    alert('Data inserted successfully!');
                } else {
                    alert('Data not inserted!');
                }
            }
        });
    })
});