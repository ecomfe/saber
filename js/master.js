(function () {


    function initDocMenu() {
        var ct = document.getElementById('doc-menu');
        var data = window.DOC_DATA || [];

        if (!ct || data.length < 1) {
            return;
        }

        var curRepo = ct.getAttribute('data-repo');
        var curVersion = ct.getAttribute('data-version');
        ct.innerHTML = getDocMenuHTML(data, curRepo, curVersion);
    }

    function getDocMenuHTML(data, curRepo, curVersion) {
        var html = [];

        html.push('<ul class="repos">');

        html.push(
            '<li'
            + (curRepo === '' ? ' class="active"' : '')
            + '><a href="/saber/doc/">Getting Started</a></li>'
        );

        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var itemVersions = item.versions;
            var versionLens = itemVersions.length;
            var lastVersion = itemVersions[versionLens - 1];

            html.push(
                format(
                    '<li${active}><a href="/saber/doc/${repo}/${ver}/">${repo}</a><ul class="versions">',
                    {
                        active: item.name === curRepo ? ' class="active"' : '',
                        repo: item.name,
                        ver: lastVersion.name
                    }
                )
            );

            for (var j = versionLens - 1; j >= 0; j--) {
                var version = itemVersions[j];
                html.push(
                    format(
                        '<li${active}><a href="/saber/doc/${repo}/${ver}/">${ver}</a></li>',
                        {
                            active: version.name === curVersion ? ' class="active"' : '',
                            repo: item.name,
                            ver: version.name
                        }
                    )
                );
            }

            html.push('</ul></li>');
        }

        html.push('</ul>');

        return html.join('');
    }

    function format(template, data) {
        if (!template) {
            return '';
        }

        if (data == null) {
            return template;
        }

        var replacer = ( typeof data === 'function' )
                ? data
                : function (key) {
                    var res = data[key];
                    return res == null ? '' : res;
                };

        return (template + '').replace(/\$\{(.+?)\}/g, function (match, key) {
            return replacer(key);
        });
    }

    initDocMenu();
})();
