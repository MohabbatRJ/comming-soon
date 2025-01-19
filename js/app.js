$(function () {
	'use strict';

	$('.countdown').downCount({
		date: '01/19/2030 00:00:00', 
		offset: +10
	}, function () {
		alert('The event has started!');
	});
});