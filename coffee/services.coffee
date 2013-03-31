LOL.factory 'localService', ->
	set: (n,m) ->
		localStorage.setItem n,m

	get: (n) -> 
		localStorage.getItem n

	del: (n) ->
		localStorage.removeItem n

	reset: ->
		try 
		    localStorage.clear();
		    window.location.reload();
	    catch error
	        alert "Не удалось очистить локальное хранилище: #{error}"
