
	$(document).ready(function() {

		if ( $('input[name="PS_LOYALTY_AUTOVOUCHER"]:checked').val() == 0)
			$('input[name="PS_LOYALTY_AUTOVOUCHER_EMAIL"]').closest('.form-group').toggle();

		$('input[name="PS_LOYALTY_AUTOVOUCHER"]').change(function() {
			$('input[name="PS_LOYALTY_AUTOVOUCHER_EMAIL"]').closest('.form-group').toggle();
		});

		$('input[name="point_percent"]').keyup(function() {
			$('input[name="point_value"]').val( $(this).val() / 100 );
		});

		$('input[name="point_value"]').keyup(function() {
			$('input[name="point_percent"]').val( $(this).val() * 100 );
		});

	});