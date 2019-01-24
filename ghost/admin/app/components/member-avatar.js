import Component from '@ember/component';
import {computed} from '@ember/object';
import {htmlSafe} from '@ember/string';

const stringToHslColor = function (str, saturation, lightness) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    var h = hash % 360;
    return 'hsl(' + h + ', ' + saturation + '%, ' + lightness + '%)';
};

export default Component.extend({

    member: null,

    backgroundStyle: computed('member.name', function () {
        let name = this.member.name;
        if (name) {
            let color = stringToHslColor(name, 30, 80);
            return htmlSafe(`background-color: ${color}`);
        }
    }),

    initials: computed('member.name', function () {
        let names = this.member.name.split(' ');
        let intials = [names[0][0], names[names.length - 1][0]];
        return intials.join('').toUpperCase();
    })
});
