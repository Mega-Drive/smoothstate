/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initSmooth();

	function initSmooth()
	{
		// $('#main').smoothState();
		
		var options =
		{
			prefetch: true,
			cacheLength: 2,
			onStart:
			{
				duration: 20000, // Duration of our animation
				render: function ($container)
				{
					// Add your CSS animation reversing class
					$container.addClass('is-exiting');

					// Restart your animation
					smoothState.restartCSSAnimations();
				}
			},
			onReady:
			{
				duration: 0,
				render: function ($container, $newContent)
				{
					// Remove your CSS animation reversing class
					$container.removeClass('is-exiting');

					// Inject the new content
					$container.html($newContent);

				}
			}
		},
		smoothState = $('#main').smoothState(options).data('smoothState');
	}

});
