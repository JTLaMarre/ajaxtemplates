export class Ajax {

    constructor() {

        // with a button for ajax call
        const button: HTMLElement = document.querySelector("{button selector here}");
        const QueryURL: string = "{query url here}";

        button.addEventListener('click', function () {
            let Query = `${QueryURL}+{input}` //honestly could pass QueryUrl in ajax function this is useful foradding input at end or url tho
            ajax(Query)

        })

        function pass(res: Response): void {
            res.json().then(function (data: any) {
                console.log(data) // here just returns the json object depending on what you want to do do things here
            })
        }
        function fail(res: Response): void {
            console.error(res)
        }
        function ajax(input: string) {
            fetch(input).then(pass, fail)
        }



        // ---------------------------------------------------------------------------


        // without button
        const queryURL = "{url here}"
        let query = `${queryURL}+{input}`
        ajax(query)


        function pass2(res:Response) {
            res.json().then(function (data) {
                console.log(data) //options with data here
            })
        }
        function fail2(res:Response) {
            console.error(res)
        }
        function ajax2(input:string) {
            fetch(input).then(pass, fail)
        }

    }//constructor wrapper
} //class wrapper