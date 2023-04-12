import data from '../data.json' assert { type: 'json' }

const main = document.querySelector<HTMLDivElement>("main");

type Comment = {
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user: {
        image: {
            png: string,
            webp: string
        },
        username: "string"
    },
    replies: []
}

type Reply = {
    id: number,
    content: string,
    createdAt: string,
    score: number,
    replyingTo: string,
    user: {
        image: {
            png: string,
            webp: string,
        }
        username: "string"
    }
}

function loadData(data: any) {
    data.comments.forEach((element: Comment) => {
        const section: HTMLDivElement = createaDomElement("section", null, null, null);
        main?.append(section);

        const commentSection: HTMLDivElement = createaDomElement("div", "comment_section", null, null)
        section.append(commentSection);

        const titleContainer: HTMLDivElement = createaDomElement("div", "titleContainer", null, null);
        commentSection.append(titleContainer);

        const avatar: HTMLImageElement = createaDomElement("img", "avatar", null, element.user.image.webp);
        titleContainer.append(avatar);

        const name: HTMLHeadingElement = createaDomElement("h2", "userName", element.user.username, null);
        titleContainer.append(name);

        const time: HTMLParagraphElement = createaDomElement("p", "time", element.createdAt, null);
        titleContainer.append(time);

        const comment: HTMLParagraphElement = createaDomElement("p", "comment", element.content, null);
        commentSection.append(comment);

        const titleAndComment: HTMLDivElement = createaDomElement("div", "titleAndComment", null, null); // style titleAndComment on breakpoint(change flex properties)

        titleAndComment.append(titleContainer, comment);
        commentSection.append(titleAndComment);

        const sectionFooter: HTMLDivElement = createaDomElement("div", "sectionFooter", null, null);
        commentSection.append(sectionFooter);

        const voteSystem: HTMLDivElement = createaDomElement("div", "voteSystem", null, null);
        sectionFooter.append(voteSystem);

        const upVote: HTMLImageElement = createaDomElement("img", "upVote", null, "/images/icon-plus.svg");
        voteSystem.append(upVote);

        const vote: HTMLParagraphElement = createaDomElement("p", "vote", element.score, null);
        voteSystem.append(vote);

        const downVote: HTMLImageElement = createaDomElement("img", "downVote", null, "/images/icon-minus.svg")
        voteSystem.append(downVote);

        const replyDiv: HTMLDivElement = createaDomElement("div", "replyDiv", null, null);
        const replyIcon: HTMLImageElement = createaDomElement("img", null, null, "/images/icon-reply.svg");
        const replyText: HTMLParagraphElement = createaDomElement("p", "replyText", "Reply", null);
        replyDiv.append(replyIcon);
        replyDiv.append(replyText);
        sectionFooter.append(replyDiv);


        const reply_section: HTMLDivElement = createaDomElement("div", "reply_section", null, null);
        section.append(reply_section);
        element.replies.forEach((element: Reply) => {
            
            const comment_div: HTMLDivElement = createaDomElement("div", "comment_div", null, null);
            reply_section.append(comment_div)

            const titleContainer: HTMLDivElement = createaDomElement("div", "titleContainer", null, null);
            comment_div.append(titleContainer);

            const avatar: HTMLImageElement = createaDomElement("img", "avatar", null, element.user.image.webp);
            titleContainer.append(avatar);

            const name: HTMLHeadingElement = createaDomElement("h2", "userName", element.user.username, null);
            titleContainer.append(name);

            const time: HTMLParagraphElement = createaDomElement("p", "time", element.createdAt, null);
            titleContainer.append(time);

            const comment: HTMLParagraphElement = createaDomElement("p", "comment", element.content, null);
            comment_div.append(comment);

            const titleAndComment: HTMLDivElement = createaDomElement("div", "titleAndComment", null, null); // style titleAndComment on breakpoint(change flex properties)

            titleAndComment.append(titleContainer, comment);
            comment_div.append(titleAndComment);

            const sectionFooter: HTMLDivElement = createaDomElement("div", "sectionFooter", null, null);
            comment_div.append(sectionFooter);

            const voteSystem: HTMLDivElement = createaDomElement("div", "voteSystem", null, null);
            sectionFooter.append(voteSystem);

            const upVote: HTMLImageElement = createaDomElement("img", "upVote", null, "/images/icon-plus.svg");
            voteSystem.append(upVote);

            const vote: HTMLParagraphElement = createaDomElement("p", "vote", element.score, null);
            voteSystem.append(vote);

            const downVote: HTMLImageElement = createaDomElement("img", "downVote", null, "/images/icon-minus.svg")
            voteSystem.append(downVote);

            const replyDiv: HTMLDivElement = createaDomElement("div", "replyDiv", null, null);
            const replyIcon: HTMLImageElement = createaDomElement("img", null, null, "/images/icon-reply.svg");
            const replyText: HTMLParagraphElement = createaDomElement("p", "replyText", "Reply", null);
            replyDiv.append(replyIcon);
            replyDiv.append(replyText);
            sectionFooter.append(replyDiv);
        }) 
        

    });
}

function createaDomElement(tag: string, className: string | null, textContent: string | number | null, src: string | null, ) {
    const element: any = document.createElement(tag);
    if (className) {
        element.classList.add(className)
    }
    if (textContent) {
        element.textContent = textContent;
    }
    if (src) {
        element.src = src;
    }
    return element;
}

loadData(data);

