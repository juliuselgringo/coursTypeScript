class FeatureFlags{
    darkMode(){return true}
    privateMode(){return true}
    nsfwMode(){return true}
}

type OptionsFlag<T> = {
    [key in keyof T]: boolean
}

type A2 = OptionsFlag<FeatureFlags>