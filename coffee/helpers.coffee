# Helpers
class Helpers
	lSet: (n,m) ->
		localStorage.setItem n,m

	lGet: (n) -> 
		localStorage.getItem n

	lDel: (n) ->
		localStorage.removeItem n

	resetBuilds: ->
		try 
		    localStorage.clear();
		    window.location.reload();
	    catch error
	        alert "Не удалось очистить локальное хранилище:" + error