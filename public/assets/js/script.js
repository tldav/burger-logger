$(function() {
	$(".devour-button").on("click", function(e) {
		let id = $(this).data("id");

		$.ajax("api/burgers/" + id, {
			type: "PUT"
		}).then(() => {
			location.reload();
		});
	});

	$(".create-burger").on("click", function(e) {
		e.preventDefault();
		let newBurger = {
			name: $(".input-burger")
				.val()
				.trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(() => {
			location.reload();
		});
	});
});
