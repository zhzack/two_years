/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2020, 1, 11, 14,2,21) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day,hou,min,sec) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day,hou,min,sec);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>哈喽！狗程琳🐕！</h1>
                    <p >在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
                    <p>今天是我们相识第一个月的纪念日，相识到慢慢相知，从我开始追求你，到后来先变成好朋友，我们一起经历了许许多多的事情，
                        有欢笑也有争吵，，但是我们都走过来了。</p>
                    <p>刚和你聊天那会儿，每天手机攥在手里等待着你的回信，看着你回复的消息独自傻笑😀，真的是有够开心的。你做兼职那时每天早上期待着闹铃响，与其说期待闹铃不如说期待着你的声音，哈哈。
                        你我素未谋面，我也未曾看到过你的照片，不过那天梦里我还是梦到你了，梦到你请我吃没有刺的鱼🐟，我带着你到处去玩。真的期待会有那么一天，我感觉会有那么一天，亲人也好，朋友也罢。
                        
                    </p>
                    <p>
                        整个人都处于一种飘飘然的状态。再到后来高考后的那个暑假，也是我一生当中最难忘的暑假，初吻、约会、每天都歪腻在一起，真心的感谢你陪我度过的那些时光。
                </p>
                    <p>然后我们就开始了漫长的异地恋，还记得我们异地后的第一次见面嘛，分别那天傍晚，一个人开着电动车哭到哽咽，口头上说着没事，但没想到分别竟然是如此刺痛，那时候我就决定，
                        “我魏锐，非汪雅秋不娶”。在异地的期间里，我们一起去过很多地方，留下过很多难忘的回忆。有人说：“异地恋其实并不难坚持，因为它真实地考验了
                        两个人的心”。是啊！我们异地经历的那些事，让我们能够看清对方的真心，也让我们的感情更加深厚。最近很喜欢《谁愿放手》中的一句话，“年年月月逝去越是觉得深爱你”。
                </p>
                    <p>虽然我们素未谋面，但遇见你三生有幸。非常感谢有你的陪伴，
                </p>
                    <p>最后祝纪念日快乐哦！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的♥郑治</p>
                        <p>2018年4月23日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main