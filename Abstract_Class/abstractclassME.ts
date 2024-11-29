abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void
    get ReelTime(): number {
        return 8
    }
}


class Instagramm extends TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("GET SEPIA")
    }

}


const hc = new Instagramm("test", "test", 2)