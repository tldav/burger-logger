$(function() {
	$(".devour-button").on("click", function(e) {
		const id = $(this).data("id");

		$.ajax("/burgers/" + id, {
			type: "PUT"
		}).then(() => {
			location.reload();
		});
	});
});
