'use strict';

// Formate les headers pour une requête axios
const formatHeaders = data => [data, {'headers': {'content-type': 'application/x-www-form-urlencoded'}}];

module.exports = {formatHeaders};