---
pmid: "41470048"
pmc: "PMC12753303"
doi: "10.1093/bib/bbaf682"
title: "MetImputBERT: a pretrained BERT framework for missing value imputation in NMR metabolomics data"
journal: "Briefings in Bioinformatics"
year: 2025
authors:
  - name: "Qiu Shizheng"
    affiliations:
      - "Faculty of Computing, Harbin Institute of Technology, 92 Xidazhi Street, Nangang District, Harbin, 150001, China"
  - name: "Hu Yang"
    affiliations:
      - "Faculty of Computing, Harbin Institute of Technology, 92 Xidazhi Street, Nangang District, Harbin, 150001, China"
  - name: "the Alzheimer's Disease Neuroimaging Initiative"
  - name: "Liu Guiyou"
    affiliations:
      - "Beijing Institute of Brain Disorders, Laboratory of Brain Disorders, Ministry of Science and Technology, Collaborative Innovation Center for Brain Disorders, National Engineering Center of Internet Medical Diagnosis and Treatment Technology, Xuanwu Hospital, Capital Medical University, Beijing, 100069, China"
      - "Department of Epidemiology and Biostatistics, School of Public Health, Wannan Medical College, No. 22, Wenchang Road, Wuhu, 241002, China"
      - "Dongying Branch Center of Collaborative Innovation Center for Brain Disorders, Shengli Oilfield Central Hospital, No. 31 Jinan Road, Dongying, 257034, China"
      - "Clinical Medicine Translational Research Institute, Chengdu Fifth People’s Hospital, Geriatric Diseases Institute of Chengdu, The Second Clinical Medical College, Affiliated Fifth People’s Hospital of Chengdu University of Traditional Chinese Medicine, Chengdu University of Traditional Chinese Medicine, No. 33, Ma Shi Street, Chengdu, 611137, China"
  - name: "Wang Yadong"
    affiliations:
      - "Faculty of Computing, Harbin Institute of Technology, 92 Xidazhi Street, Nangang District, Harbin, 150001, China"
      - "Zhengzhou Research Institute, Harbin Institute of Technology, No. 26, Longyuan East 7th Street, Zhengdong New District, Zhengzhou, 450000, China"
---

# MetImputBERT: a pretrained BERT framework for missing value imputation in NMR metabolomics data

## Abstract

Missing values in nuclear magnetic resonance metabolomics data compromise downstream clinical interpretation. Here, we present MetImputBERT, an imputation method based on a pretrained BERT framework. MetImputBERT uses the masks in the masked language model to simulate missing values and leverages predictions and reconstructions to these positions to simulate the imputation process. The learning of MetImputBERT is driven by minimizing the reconstruction error. MetImputBERT was pretrained on the largest metabolomics dataset to date, comprising data from over 230 000 individuals in the UK Biobank. When new datasets with missing values were encountered, MetImputBERT loaded the pretrained parameters and directly imputed the missing values by inferring their reconstructed estimates. MetImputBERT outperformed commonly used methods—K-nearest neighbors, multiple imputation by chained equations, and singular value decomposition—in imputation performance on two independent test sets. We provide an open-source Python tool that allows users to quickly impute missing values in their own NMR metabolomics data without any additional training.

## Introduction

Nuclear magnetic resonance (NMR) and chromatography–mass spectrometry (MS) are essential techniques in the field of metabolomics [1]. Compared with MS-based methods, NMR metabolomics offers distinct advantages: it does not exhibit batch effects, preserves sample integrity, and provides absolute concentrations of metabolites rather than relative values [2–4]. The availability of absolute concentrations enhances the interpretability of biomarkers [5]. Currently, the Nightingale Health platform has been widely applied in many cohort studies, including the UK Biobank (UKB), Finnish Biobank Cooperative (FINBB), and China Kadoorie Biobank (CKB) [6–8]. Nevertheless, missing values are inevitable in NMR metabolomics data because of factors such as sample transportation issues, environmental influences prior to detection, and metabolite signals falling below the instrument’s detection threshold—all of which impact statistical power and downstream clinical interpretation [9].

Although several methods for imputing missing values in MS metabolomics have been developed, they generally address the issue only from a statistical standpoint, without designing imputation tools tailored to the specific data format and missing value characteristics of NMR metabolomics [10–12]. Therefore, the majority of current studies still use traditional multiple imputation to impute missing values in NMR metabolomics [13]. More importantly, all current methods perform imputation based on their own small-sample datasets, making them highly susceptible to the influence of outliers on the imputation results [14, 15].

In this work, we introduce MetImputBERT, a method that leverages a pretrained BERT model to impute missing values in NMR metabolomics data (Fig. 1A). In our approach, missing values are treated as masked metabolite expression levels during the pretraining process, and the model’s predictions and reconstructions for these masked positions serve as imputations. The conventional masked language modeling task of BERT, originally designed for textual data, is not directly applicable to the numerical features found in metabolomics [16]. To address this challenge, we introduce a novel mask-and-reconstruct pretraining task specifically designed for numerical features. Specifically, we randomly mask 15% of the metabolite expression values and task the model with predicting and reconstructing these values. Reconstruction is considered successful if the error between the reconstructed and original values falls within a predefined range. By minimizing the reconstruction error loss, the model effectively learns the intrinsic characteristics in metabolomics data. Consequently, after pretraining on a large-scale cohort of the general population, users can load the pretrained model weights to directly infer (impute) missing values in their new datasets without any additional training.

> **Figure 1: Architecture of MetImputBERT. (A) Pretraining method of MetImputBERT. MetImputBERT is pretrained on numerical NMR metabolomics data using a mask-and-reconstruct task. In this task, 15% of the metabolite measurements are randomly masked, and the model attempts to reconstruct the values at these positions. A reconstruction is deemed successful if the error between the reconstructed and original values is less than half of the original value’s standard deviation. The model continuously learns by minimizing the loss based on the reconstruction error. Once the pretrained model is saved, missing values in the new dataset requiring imputation are replaced with 0 and imputed directly through inference. (B) NMR metabolomics samples. The pretraining samples consist of a UK Biobank cohort with complete metabolomics data (no missing values). The imputation performance of MetImputBERT was tested across two cohorts: UKB-PPP and ADNI. (C) Performance evaluation. The performance of MetImputBERT was assessed using various metrics and compared to other commonly used imputation methods. Created in BioRender. Qiu, S. (2026) https://BioRender.com/k9rj3v0.**

## Results

### Pretraining of MetImputBERT

We pretrained our model using the metabolomics cohort of general population, which comprises 168 plasma metabolite levels from over 230 000 individuals of multiple ancestries in the UKB, all without any missing values. The model converged after 96 epochs of training. On the validation set, the model demonstrated excellent performance, with a loss of 0.0819, a mask-and-reconstruct success rate of 0.9463, a mean squared error (MSE) of 0.0819, a mean absolute error (MAE) of 0.1306, and an R2 of 0.9178 (Supplementary Fig. 1).

### Evaluation of imputation performance

To evaluate the imputation performance of the model, we selected two independent NMR metabolomics datasets that contained no missing values. These datasets include the UK Biobank Pharma Proteomics Project (UKB-PPP) and the Alzheimer’s Disease Neuroimaging Initiative (ADNI) (Fig. 1B). We then artificially introduced missing values at rates of 0.1%, 0.2%, 0.5%, 1%, 2%, 5%, 10%, and 20% into these datasets and performed imputation using the MetImputBERT pretrained model, K-nearest neighbors (KNN), multiple imputation by chained equations (MICE), and singular value decomposition (SVD) (Fig. 1C). MetImputBERT marked missing data as 0 and directly infers the missing values using the weights of baseline metabolite interactions learned during pretraining, whereas other algorithms required imputation based on the test dataset itself. The imputation performance was assessed using MSE, MAE, R2, Pearson correlation, and reconstruction accuracy. Across all missing value proportions in the two test datasets, MetImputBERT outperformed the commonly used KNN, multiple imputation, and SVD methods (Table 1, Supplementary Table 1).

**Table 1: Performance evaluation of different imputation models with different missing rates of NMR metabolomics in ADNI independent test set.**

| Missing rate | Method | MSE | MAE | R 2 | Pearson | Success rate |
|---|---|---|---|---|---|---|
| 0.001 | MetImputBERT | 0.091 (0.081–0.101) | 0.157 (0.148–0.165) | 0.906 (0.899–0.913) | 0.955 (0.951–0.959) | 0.937 (0.926–0.947) |
| 0.001 | KNN | 0.155 (0.128–0.182) | 0.249 (0.236–0.261) | 0.839 (0.816–0.862) | 0.919 (0.908–0.931) | 0.886 (0.872–0.900) |
| 0.001 | MICEForest | 0.105 (0.081–0.129) | 0.138 (0.125–0.151) | 0.891 (0.870–0.912) | 0.945 (0.935–0.956) | 0.930 (0.917–0.942) |
| 0.001 | SVD | 0.297 (0.078–0.515) | 0.182 (0.152–0.212) | 0.699 (0.491–0.907) | 0.876 (0.808–0.943) | 0.925 (0.912–0.938) |
| 0.002 | MetImputBERT | 0.089 (0.080–0.099) | 0.156 (0.148–0.163) | 0.913 (0.902–0.925) | 0.958 (0.952–0.964) | 0.935 (0.928–0.942) |
| 0.002 | KNN | 0.177 (0.165–0.188) | 0.261 (0.256–0.266) | 0.829 (0.815–0.843) | 0.913 (0.905–0.921) | 0.873 (0.865–0.881) |
| 0.002 | MICEForest | 0.106 (0.092–0.119) | 0.139 (0.132–0.146) | 0.897 (0.882–0.912) | 0.948 (0.940–0.956) | 0.934 (0.928–0.939) |
| 0.002 | SVD | 0.235 (0.177–0.294) | 0.181 (0.170–0.192) | 0.771 (0.709–0.832) | 0.895 (0.870–0.920) | 0.922 (0.917–0.927) |
| 0.005 | MetImputBERT | 0.085 (0.077–0.093) | 0.150 (0.146–0.153) | 0.914 (0.904–0.923) | 0.957 (0.953–0.962) | 0.940 (0.935–0.944) |
| 0.005 | KNN | 0.166 (0.153–0.178) | 0.253 (0.248–0.259) | 0.831 (0.818–0.845) | 0.914 (0.907–0.922) | 0.880 (0.875–0.885) |
| 0.005 | MICEForest | 0.087 (0.078–0.097) | 0.127 (0.121–0.133) | 0.911 (0.900–0.921) | 0.955 (0.950–0.960) | 0.943 (0.938–0.947) |
| 0.005 | SVD | 0.196 (0.166–0.226) | 0.171 (0.163–0.178) | 0.801 (0.776–0.826) | 0.906 (0.895–0.918) | 0.928 (0.923–0.932) |
| 0.01 | MetImputBERT | 0.092 (0.086–0.098) | 0.150 (0.146–0.153) | 0.909 (0.904–0.913) | 0.955 (0.952–0.957) | 0.939 (0.936–0.943) |
| 0.01 | KNN | 0.178 (0.166–0.189) | 0.259 (0.253–0.265) | 0.824 (0.815–0.832) | 0.910 (0.906–0.915) | 0.874 (0.867–0.881) |
| 0.01 | MICEForest | 0.108 (0.098–0.118) | 0.137 (0.131–0.142) | 0.893 (0.884–0.902) | 0.945 (0.941–0.950) | 0.936 (0.931–0.940) |
| 0.01 | SVD | 0.207 (0.199–0.215) | 0.177 (0.175–0.179) | 0.794 (0.782–0.805) | 0.902 (0.898–0.907) | 0.926 (0.923–0.929) |
| 0.02 | MetImputBERT | 0.090 (0.084–0.097) | 0.146 (0.143–0.149) | 0.909 (0.902–0.915) | 0.954 (0.951–0.958) | 0.942 (0.940–0.945) |
| 0.02 | KNN | 0.171 (0.165–0.177) | 0.255 (0.253–0.258) | 0.827 (0.821–0.833) | 0.912 (0.909–0.916) | 0.876 (0.874–0.879) |
| 0.02 | MICEForest | 0.108 (0.101–0.116) | 0.137 (0.133–0.140) | 0.891 (0.884–0.897) | 0.944 (0.941–0.948) | 0.936 (0.933–0.940) |
| 0.02 | SVD | 0.224 (0.209–0.238) | 0.177 (0.172–0.182) | 0.773 (0.757–0.789) | 0.895 (0.888–0.901) | 0.927 (0.924–0.930) |
| 0.05 | MetImputBERT | 0.092 (0.089–0.096) | 0.146 (0.145–0.148) | 0.907 (0.904–0.911) | 0.954 (0.952–0.956) | 0.941 (0.939–0.942) |
| 0.05 | KNN | 0.177 (0.173–0.181) | 0.260 (0.258–0.261) | 0.821 (0.817–0.826) | 0.909 (0.907–0.912) | 0.874 (0.872–0.876) |
| 0.05 | MICEForest | 0.111 (0.108–0.114) | 0.140 (0.138–0.142) | 0.888 (0.885–0.892) | 0.943 (0.942–0.945) | 0.935 (0.933–0.936) |
| 0.05 | SVD | 0.260 (0.242–0.277) | 0.186 (0.183–0.189) | 0.738 (0.720–0.756) | 0.881 (0.874–0.888) | 0.924 (0.923–0.925) |
| 0.1 | MetImputBERT | 0.090 (0.087–0.093) | 0.145 (0.144–0.146) | 0.910 (0.907–0.912) | 0.955 (0.954–0.956) | 0.942 (0.941–0.943) |
| 0.1 | KNN | 0.181 (0.178–0.185) | 0.262 (0.260–0.264) | 0.818 (0.816–0.821) | 0.908 (0.906–0.909) | 0.871 (0.869–0.873) |
| 0.1 | MICEForest | 0.115 (0.112–0.118) | 0.146 (0.145–0.147) | 0.885 (0.882–0.888) | 0.941 (0.940–0.943) | 0.932 (0.931–0.932) |
| 0.1 | SVD | 0.274 (0.263–0.284) | 0.190 (0.188–0.192) | 0.726 (0.715–0.737) | 0.876 (0.872–0.880) | 0.923 (0.922–0.924) |
| 0.2 | MetImputBERT | 0.093 (0.091–0.095) | 0.147 (0.146–0.147) | 0.907 (0.905–0.909) | 0.954 (0.953–0.955) | 0.940 (0.940–0.941) |
| 0.2 | KNN | 0.191 (0.188–0.194) | 0.269 (0.268–0.270) | 0.810 (0.807–0.812) | 0.903 (0.901–0.905) | 0.866 (0.865–0.867) |
| 0.2 | MICEForest | 0.126 (0.123–0.128) | 0.159 (0.158–0.160) | 0.875 (0.872–0.877) | 0.936 (0.934–0.937) | 0.925 (0.925–0.926) |
| 0.2 | SVD | 0.313 (0.302–0.323) | 0.200 (0.198–0.202) | 0.688 (0.678–0.698) | 0.862 (0.858–0.865) | 0.920 (0.919–0.920) |


Taking a missing rate of 0.5% as an example (0.16% for the UKB and 0.57% for ADNI in real data), we present a comparison between the distributions of the true values and imputed data using different imputation models. The performance of KNN, SVD, and multiple imputation is generally inferior to that of MetImputBERT, and the scatter plots of the imputed values versus the true values for these methods are more dispersed than those produced by MetImputBERT, with more points deviating from the reference line (y = x) (Fig. 2). We further compared the running times of MetImputBERT and the other methods when imputing different numbers of missing values. MetImputBERT’s inference speed is extremely high. When running inference on a graphics processing unit (GPU), MetImputBERT only requires 3.3 s to impute 10 000 missing values. Even when only using a central processing unit (CPU)—which takes ~430.7 s—it remains considerably faster than multiple imputation (around 1529.6 s), although it is slower than KNN and SVD imputation (Fig. 3A, Supplementary Table 2).

> **Figure 2: Evaluation of MetImputBERT’s performance using ADNI cohort. (A) Scatter plots depicting the distribution of imputed versus true values for different imputation methods. Points on the dotted reference line indicate that the imputed values exactly match the true values. (B) Comparison of the distributions of imputed and true values using different imputation methods, using a 0.5% missing rate as an example.**

> **Figure 3: The running times of different imputation methods under various missing value rates. (A) The pretraining model containing 168 metabolite measurements. (B) The pretraining model containing 168 metabolite measurements and 81 ratios.**

### Imputation model for the ratio of metabolite combinations

Considering that some users may need to impute ratios between metabolites, we also incorporated 81 ratios derived from combinations of metabolites and built a pretrained model based on a total of 249 metabolite measurements (Table 2). Even if certain metabolite concentrations or ratios are entirely missing in a user’s metabolomics dataset, they can be treated as missing values and directly imputed. This pretrained model was trained for 78 epochs, achieving a loss of 0.0566, a mask-reconstruction accuracy of 0.9647, an MSE of 0.0565, an MAE of 0.1080, and an R2 of 0.9436. We similarly compared the performance of MetImputBERT with other commonly used imputation methods across two test datasets. MetImputBERT still achieved state-of-the-art performance across almost all metrics and remained robust regardless of the number of missing values (Fig. 4, Supplementary Table 3). Notably, when run on a GPU, MetImputBERT’s imputation speed is comparable to KNN and SVD and far faster than multiple imputation (MetImputBERT GPU: 4.0 ± 0.4 s, MetImputBERT CPU: 490.1 ± 1.9 s, multiple imputation: 3437.6 ± 24.5 s) (Fig. 3B, Supplementary Table 4).

**Table 2: Performance evaluation of different imputation models with different missing rates of NMR metabolomics in ADNI independent test set (249 metabolomic model).**

| Missing rate | Method | MSE | MAE | R 2 | Pearson | Success rate |
|---|---|---|---|---|---|---|
| 0.001 | MetImputBERT | 0.084 (0.056–0.113) | 0.142 (0.130–0.153) | 0.912 (0.889–0.936) | 0.957 (0.945–0.969) | 0.947 (0.940–0.953) |
| 0.001 | KNN | 0.182 (0.149–0.215) | 0.277 (0.258–0.295) | 0.808 (0.784–0.832) | 0.903 (0.890–0.917) | 0.856 (0.843–0.868) |
| 0.001 | MICEForest | 0.088 (0.060–0.116) | 0.132 (0.121–0.144) | 0.908 (0.883–0.932) | 0.953 (0.941–0.966) | 0.944 (0.936–0.952) |
| 0.001 | SVD | 0.087 (0.059–0.115) | 0.154 (0.143–0.166) | 0.909 (0.886–0.932) | 0.954 (0.943–0.966) | 0.940 (0.928–0.952) |
| 0.002 | MetImputBERT | 0.069 (0.059–0.079) | 0.133 (0.128–0.138) | 0.931 (0.923–0.938) | 0.966 (0.962–0.970) | 0.953 (0.947–0.959) |
| 0.002 | KNN | 0.178 (0.154–0.202) | 0.275 (0.266–0.284) | 0.822 (0.809–0.835) | 0.911 (0.905–0.918) | 0.858 (0.849–0.867) |
| 0.002 | MICEForest | 0.079 (0.059–0.098) | 0.127 (0.120–0.135) | 0.922 (0.908–0.936) | 0.960 (0.953–0.968) | 0.946 (0.941–0.952) |
| 0.002 | SVD | 0.084 (0.074–0.095) | 0.154 (0.149–0.159) | 0.915 (0.904–0.926) | 0.957 (0.952–0.962) | 0.942 (0.936–0.948) |
| 0.005 | MetImputBERT | 0.083 (0.071–0.095) | 0.140 (0.136–0.143) | 0.916 (0.903–0.929) | 0.958 (0.951–0.965) | 0.948 (0.945–0.951) |
| 0.005 | KNN | 0.194 (0.182–0.205) | 0.282 (0.276–0.288) | 0.804 (0.792–0.817) | 0.902 (0.895–0.910) | 0.852 (0.847–0.856) |
| 0.005 | MICEForest | 0.085 (0.073–0.098) | 0.132 (0.127–0.138) | 0.914 (0.900–0.927) | 0.956 (0.949–0.963) | 0.944 (0.938–0.949) |
| 0.005 | SVD | 0.090 (0.086–0.094) | 0.160 (0.157–0.163) | 0.909 (0.903–0.915) | 0.954 (0.951–0.957) | 0.936 (0.932–0.940) |
| 0.01 | MetImputBERT | 0.082 (0.070–0.095) | 0.138 (0.135–0.141) | 0.917 (0.906–0.928) | 0.959 (0.953–0.965) | 0.950 (0.947–0.952) |
| 0.01 | KNN | 0.193 (0.173–0.213) | 0.279 (0.274–0.284) | 0.806 (0.790–0.822) | 0.902 (0.894–0.911) | 0.854 (0.848–0.860) |
| 0.01 | MICEForest | 0.085 (0.071–0.100) | 0.128 (0.125–0.131) | 0.914 (0.901–0.927) | 0.956 (0.949–0.963) | 0.948 (0.947–0.949) |
| 0.01 | SVD | 0.096 (0.082–0.110) | 0.158 (0.155–0.162) | 0.903 (0.891–0.915) | 0.951 (0.944–0.957) | 0.936 (0.935–0.938) |
| 0.02 | MetImputBERT | 0.083 (0.077–0.090) | 0.140 (0.137–0.142) | 0.917 (0.911–0.924) | 0.959 (0.956–0.962) | 0.948 (0.946–0.950) |
| 0.02 | KNN | 0.202 (0.185–0.219) | 0.282 (0.279–0.285) | 0.800 (0.786–0.813) | 0.899 (0.891–0.907) | 0.853 (0.850–0.855) |
| 0.02 | MICEForest | 0.092 (0.077–0.106) | 0.132 (0.129–0.135) | 0.909 (0.897–0.922) | 0.954 (0.947–0.960) | 0.944 (0.943–0.946) |
| 0.02 | SVD | 0.100 (0.087–0.113) | 0.160 (0.157–0.164) | 0.901 (0.889–0.913) | 0.950 (0.943–0.956) | 0.935 (0.932–0.938) |
| 0.05 | MetImputBERT | 0.083 (0.081–0.086) | 0.141 (0.139–0.142) | 0.917 (0.914–0.919) | 0.959 (0.958–0.960) | 0.948 (0.946–0.949) |
| 0.05 | KNN | 0.199 (0.193–0.205) | 0.283 (0.281–0.285) | 0.801 (0.797–0.805) | 0.900 (0.897–0.903) | 0.851 (0.849–0.853) |
| 0.05 | MICEForest | 0.090 (0.085–0.096) | 0.135 (0.134–0.137) | 0.910 (0.905–0.915) | 0.954 (0.951–0.956) | 0.944 (0.942–0.945) |
| 0.05 | SVD | 0.099 (0.093–0.106) | 0.162 (0.160–0.163) | 0.901 (0.894–0.907) | 0.950 (0.946–0.953) | 0.934 (0.933–0.936) |
| 0.1 | MetImputBERT | 0.083 (0.080–0.086) | 0.140 (0.139–0.141) | 0.917 (0.914–0.920) | 0.959 (0.958–0.960) | 0.947 (0.947–0.948) |
| 0.1 | KNN | 0.203 (0.199–0.207) | 0.286 (0.285–0.288) | 0.797 (0.794–0.800) | 0.898 (0.896–0.900) | 0.848 (0.847–0.850) |
| 0.1 | MICEForest | 0.094 (0.090–0.098) | 0.141 (0.140–0.142) | 0.906 (0.902–0.909) | 0.952 (0.950–0.954) | 0.941 (0.940–0.942) |
| 0.1 | SVD | 0.105 (0.099–0.111) | 0.164 (0.162–0.166) | 0.895 (0.890–0.901) | 0.947 (0.944–0.950) | 0.933 (0.931–0.934) |
| 0.2 | MetImputBERT | 0.087 (0.086–0.088) | 0.142 (0.141–0.143) | 0.913 (0.912–0.915) | 0.957 (0.956–0.957) | 0.946 (0.945–0.946) |
| 0.2 | KNN | 0.210 (0.208–0.212) | 0.294 (0.293–0.294) | 0.790 (0.789–0.792) | 0.894 (0.893–0.895) | 0.841 (0.840–0.842) |
| 0.2 | MICEForest | 0.108 (0.106–0.110) | 0.158 (0.158–0.159) | 0.892 (0.890–0.894) | 0.945 (0.944–0.946) | 0.931 (0.930–0.932) |
| 0.2 | SVD | 0.131 (0.122–0.140) | 0.175 (0.173–0.177) | 0.869 (0.860–0.878) | 0.934 (0.930–0.938) | 0.927 (0.925–0.928) |


> **Figure 4: Evaluation of MetImputBERT’s performance in a pretraining model containing 249 metabolite measurements using ADNI cohort. (A) Scatter plots depicting the distribution of imputed versus true values for different imputation methods. Points on the dotted reference line indicate that the imputed values exactly match the true values. (B) Comparison of the distributions of imputed and true values using different imputation methods, using a 0.5% missing rate as an example.**

## Discussion

In this study, we present MetImputBERT, a pretraining-based approach for imputing missing values in NMR metabolomics data. By leveraging pretraining on over 230 000 samples from the UKB, MetImputBERT captures complex intermetabolite relationships that enable accurate reconstruction of missing values without requiring additional training on new datasets. Our method consistently outperformed traditional imputation approaches across all tested missing value rates, demonstrating robust generalization from the general population cohort to disease-enriched cohorts.

The key innovation of MetImputBERT lies in its adaptation of the BERT architecture to handle continuous numerical features through a novel mask-and-reconstruct pretraining task [16, 17]. Unlike conventional masked language modeling designed for discrete tokens, our approach directly addresses the continuous nature of metabolite concentrations by defining reconstruction success based on biologically meaningful error tolerances. This design choice ensures that the model learns to preserve the quantitative relationships between metabolites while accounting for the inherent variability in biological measurements. The superior performance of MetImputBERT compared to traditional statistical imputation methods reflects fundamental differences in how these approaches leverage available information. While methods like KNN and MICE rely solely on the correlations present within the dataset requiring imputation, MetImputBERT exploits knowledge learned from a massive pretraining corpus. This enables accurate imputation even when the test dataset is very small.

In addition to its excellent imputation performance, MetImputBERT also achieves an extremely fast imputation speed, ensuring its practical applicability. Even when using only a CPU, it operates significantly faster than the previously most commonly used—and also the most accurate—multiple imputation methods. This speed makes MetImputBERT also well suited for imputing large-scale metabolomics cohorts. Moreover, the usage of MetImputBERT is very simple; users only need to have basic Linux knowledge, without the need to write code or retrain the model.

Several limitations warrant consideration. First, although MetImputBERT was pretrained on metabolomics data from over 230 000 multi-ancestry participants, its performance may degrade when applied to populations with substantially different genetic backgrounds. If the input data have substantially different dynamic ranges, the performance of MetImputBERT may also be compromised. Fine-tuning the model on a small subset of complete cases from the target dataset may improve performance. Additionally, MetImputBERT is specifically designed for an NMR metabolomic panel and is not suitable for MS-based metabolomics data. In NMR metabolomics, values below the detection limit are typically marked as zero, which may lead to inaccurate imputations for metabolites with very low concentrations.

In conclusion, our results show that MetImputBERT can achieve imputation results that are very close to the original data, effectively reducing sample size loss caused by missing data or bias caused by improper imputation methods, thereby enhancing the ability of NMR metabolomics in downstream medical tasks.

## Methods

### UKB

UKB is a large-scale prospective cohort study in the United Kingdom that recruited ~500 000 participants aged 40–69 between 2006 and 2010 [18, 19]. Metabolite measurements were performed on plasma samples from ~280 000 UKB participants using the Nightingale Health platform [6, 20]. The metabolites measured primarily include 168 metabolite concentrations and 81 ratios between metabolites, covering lipids/lipoprotein subfractions and various small-molecule metabolites such as amino acids and ketone bodies (Supplementary Table 5). Details of the Nightingale Health NMR biomarker platform have been described previously [3, 6, 20, 21].

### UKB-PPP

UKB-PPP is a subset of UKB comprising 54 219 participants [22]. This subset includes a random sample of 46 595 participants selected from the UKB baseline cohort, 6376 individuals selected by 13 UKB-PPP consortium members, and 1268 participants involved in a COVID-19 study. Compared with the random samples from UKB, the samples selected by consortium members typically include individuals with specific diseases of interest.

### ADNI

Data used in the preparation of this article were obtained from the Alzheimer’s Disease Neuroimaging Initiative (ADNI) database (adni.loni.usc.edu). The ADNI was launched in 2003 as a public-private partnership, led by Principal Investigator Michael W. Weiner, MD. The primary goal of ADNI has been to test whether serial magnetic resonance imaging (MRI), positron emission tomography (PET), other biological markers, and clinical and neuropsychological assessment can be combined to measure the progression of mild cognitive impairment (MCI) and early Alzheimer’s disease (AD) [5]. The ADNI was launched in 2003 as a public–private partnership, led by Principal Investigator Michael W. Weiner, MD [5]. The original goal of ADNI was to test whether serial magnetic resonance imaging (MRI), positron emission tomography (PET), other biological markers, and clinical and neuropsychological assessment can be combined to measure the progression of mild cognitive impairment (MCI) and early Alzheimer’s disease (AD). For up-to-date information, see adni.loni.usc.edu. Using Nightingale Health’s NMR metabolomics platform, standard lipids, lipoprotein subclass analysis (including lipid concentrations for 14 subclasses), fatty acid composition, and various low-molecular-weight metabolites (such as amino acids, ketone bodies, and gluconeogenesis-related metabolites) were measured in human serum samples from the ADNI 1/GO/2 cohorts. NA, TAG, and NDEF are treated as missing values, with the missing reasons being, respectively: “Value was rejected by automatic sample and measurement quality control,” “Value cannot be quantified due to detected irregularity in the sample,” and “Derived value or ratio cannot be given due to low concentration in the original measures.” A substantial fraction of lipid levels in the largest VLDL particles fell below the detection limit and were therefore marked as zero. These occurrences are very common, especially in fasting samples. Zero values can be treated as approximations of the lowest observed concentrations, so we do not consider them as missing values.

All studies were approved by the institutional review boards at the participating institutions/research sites. Informed written consent was obtained from all participants, and the demographic characteristics of the samples can be found in previously published studies [5, 6, 20, 22, 23].

### Pretraining datasets and external validation sets

For the pretraining of MetImputBERT, NMR metabolomics data from 232 048 UKB participants without any missing values were selected. Metabolomics data of 28 876 and 1672 (690 AD cases and 982 controls) independent individuals without missing values from the UKB-PPP and ADNI were used to evaluate the performance of MetImputBERT.

### Model architecture

To impute missing metabolite expressions, we developed a transformer-based architecture named MetImputBERT. This model is adapted from the BERT framework but modified to handle continuous numerical features rather than discrete tokens [16, 24].

#### Input embedding

All metabolite features were standardized via z-score normalization (mean = 0, SD = 1) before input to the model. Given a batch of metabolite expression profiles \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $X\in{\mathbb{R}}^{B\times M}$\end{document} (where B is the batch size and M is the number of metabolites), each entry \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} ${x}_{ij}$\end{document} is transformed into a high-dimensional embedding via feature-wise scaling with learnable weight vectors:

\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $$ {E}_{ij}={x}_{ij}\bullet{w}_j+{b}_j $$\end{document}

with learnable weight vectors \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} ${w}_j\in{\mathbb{R}}^d$\end{document} and biases \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} ${b}_j\in{\mathbb{R}}^d$\end{document} (with embedding dimension d = 768) [25]. This operation performs element-wise scaling and shifting to project each scalar metabolite value into a high-dimensional space. Unlike the original BERT architecture designed for sequential text data, we do not employ explicit positional encodings for metabolite tokens, as the metabolites do not have an inherent sequential order. Instead, the model learns metabolite-specific representations through the learnable weight vectors \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} ${w}_j$\end{document} and biases \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} ${b}_j$\end{document}, allowing each metabolite to be treated as a distinct feature with its own embedding transformation. A special learnable [CLS] token is prepended to the sequence to capture global sample information. Thus, the final input embedding becomes:

\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $$ E= concat\left(c,{\left\{{E}_{ij}\right\}}_{j=1}^M\right) $$\end{document}

where \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $c\in{\mathbb{R}}^d$\end{document} denotes the [CLS] token.

#### Transformer encoder

The embedded sequence is then processed through a stack of 12 transformer encoder layers [17, 26–31]. Each layer incorporates a multi-head self-attention mechanism with 8 attention heads and an attention dropout rate of 0.1. The encoder layers also contain fully connected networks that expand the hidden dimension from 768 to 3072 before reducing back to 768. Residual connections, layer normalization, and dropout are applied to ensure stable training.

#### Reconstruction head

The output representations corresponding to the metabolite tokens (i.e. excluding the [CLS] token) are fed into a linear projection layer that produces scalar predictions for the metabolite expression levels.

#### Pretraining with a mask-and-reconstruct task

Inspired by the masked language modeling objective in BERT, we employ a masked reconstruction strategy tailored for numerical data. For every input sample, 15% of the metabolite features are randomly selected for masking. In the masking strategy, 80% of the values are replaced with 0, 10% are replaced with a random value, and 10% are kept unchanged. The model is trained to reconstruct the original values at the masked positions. The reconstruction error is quantified using the MSE loss computed over only the masked elements:

\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $$ {L}_{MSE}=\frac{1}{\mid M\mid}\sum_{\left(i,j\right)\in M}{\left({x}_{ij}-{\hat{x}}_{ij}\right)}^2 $$\end{document}

where M is the set of masked indices.

#### Training procedure and hyperparameter optimization

The pretraining dataset was partitioned into a training set (80%) and a validation set (20%) using random sampling. The model was optimized using the AdamW optimizer with an initial learning rate of 5 × 10−5. A cosine learning rate scheduler with a warmup phase (covering the first 10% of total training steps) modulated the learning rate during training. Training was conducted with a batch size of 512 and a maximum epoch of 200. Early stopping was employed if no improvement in the validation loss was observed over 10 consecutive epochs. During each epoch, a variety of performance metrics were computed on the masked positions, including prediction accuracy (defined as the fraction of predictions with an absolute error below 0.5), MSE, MAE, and the coefficient of determination (R2).

#### Simulation of missingness

To simulate missing data, artificial missingness was introduced uniformly at random over the dataset using a missing mask generated at various missing rates (ranging from 0.1% to 20%). For each missing rate, 10 independent experimental runs were performed, with each run applying a newly generated missing mask \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $M\in{\left\{0,1\right\}}^{N\times 168}$\end{document} defined as

\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $$ {M}_{ij}=\left\{\begin{array}{c}1,\kern0.5em if\ a\ missing\ value\ is\ introduced\ at\ position\\{}0,\kern0.5em otherwise\end{array}\right. $$\end{document}

The artificially induced missing values were then set to NaN in the standardized dataset.

#### Imputation strategies

Three baseline imputation methods were evaluated alongside MetImputBERT:

- (1) KNN imputation: Five nearest neighbors are used to estimate each missing value.
- (2) MICEForest imputation: A multiple imputation by chained equations method using random forests.
- (3) SVD imputation iteratively fills missing values by approximating the data matrix with a low-rank singular value decomposition and using the reconstructed matrix to update missing entries.

For the pretrained model-based imputation, missing values were initially substituted by zeros, and the resulting matrix was fed as input to the MetImputBERT model. The model outputs a prediction vector \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} ${\hat{x}}_{ij}$\end{document} for each sample. The final imputed dataset is then defined by

\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $$ {\tilde{x}}_{ij}=\left\{\begin{array}{c}{\hat{x}}_{ij},\kern0.5em if\ {M}_{ij}=1\\{}{x}_{ij},\kern0.5em if\ {M}_{ij}=0\end{array}\right. $$\end{document}

thus preserving observed values and replacing missing ones with the model’s reconstructions. Imputing was conducted with a batch size of 96.

#### Performance evaluation

Performance was assessed exclusively on imputed (i.e. masked) positions. MSE: \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $MSE=\frac{1}{N_{miss}}\sum_{\left(i,j\right)\in M}{\left({x}_{ij}^{true}-{\tilde{x}}_{ij}\right)}^2$\end{document}, MAE: \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $MAE=\frac{1}{N_{miss}}\sum_{\left(i,j\right)\in M}\mid{x}_{ij}^{true}-{\tilde{x}}_{ij}\mid$\end{document}; R2 and Pearson correlation coefficient were computed using standard definitions. In addition, we defined an imputation success rate whereby an imputation is considered successful if the absolute error is <0.5:

\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{upgreek} \usepackage{mathrsfs} \setlength{\oddsidemargin}{-69pt} \begin{document} $$ \left|{x}_{ij}^{true}-{\tilde{x}}_{ij}\right|<0.5 $$\end{document}

The overall success rate is the proportion of successful imputations among all masked positions.

#### Statistical analysis and visualization

For each missing rate and imputation method, experiments were repeated over 10 independent runs. To complement the quantitative analysis, distribution plots (histograms) and scatter plots were generated comparing the true and imputed values. These visualizations were produced for the first run at each missing rate.

#### Software running time

We randomly generated missing value positions (100, 500, 1000, 5000, and 10 000) in the ADNI cohort and applied four imputation methods to these positions, recording the corresponding runtimes. All software was executed under identical hardware conditions: an Intel® Xeon® Gold 6330 CPU with 28 cores, 503 GB of memory, and an NVIDIA A100-SXM4-40GB GPU.

Key PointsMetImputBERT was pretrained on large-scale real metabolomics data from over 200 000 individuals, providing abundant prior knowledge in metabolomics.MetImputBERT employs innovative pretraining tasks that enable it to learn the features of numerical metabolomics data.MetImputBERT can rapidly infer missing values in datasets requiring imputation, achieving accuracy that outperforms that of nearly all traditional models.

## Supplementary Material

Supplementary_Tables_and_Figures_bbaf682

## Funding

- National Institute on Aging10.13039/100000049 3U01AG024904-09S4RF1AG051550R01AG046171
- Alzheimer's Disease Metabolomics Consortium
- 0-1 Original Exploration Category: Fundamental Research Funds for the Central Universities Project 2022FRFK030025
- Heilongjiang Provincial Science and Technology Tackling Project GNCMSSJH2024
- Key Research and Development Program of Heilongjiang Province 2022ZX02C20
- National Natural Science Foundation of China10.13039/501100001809 6237116162331012
- National Key Research and Development Program of China10.13039/501100012166 2021YFF1200105

## Data Availability

Data availabilityUK Biobank individual-level data can be accessed by applying for access at http://ukbiobank.ac.uk/register-apply/. Ethics approval for the UK Biobank was granted by the North West Multi-Centre Research Ethics Committee in 2006 and was updated regularly after that (https://www.ukbiobank.ac.uk/learn-more-about-uk-biobank/about-us/ethics). All participants provided informed written consent to take part in the study and be followed up through linkage to health-related records. This research has been conducted using the UK Biobank Resource under Application Number 249728. The data for the ADNI cohorts are hosted on the LONI data sharing platform and can be requested at http://adni.loni.usc.edu/data-samples/access-data/.

## References

1. 1. Wishart DS . NMR metabolomics: a look ahead. J Magn Reson 2019;306:155–61. 10.1016/j.jmr.2019.07.013.31377153 [PMID:31377153]
2. 2. Nagana Gowda GA, Raftery D. NMR-based metabolomics. Adv Exp Med Biol 2021;1280:19–37. 10.1007/978-3-030-51652-9_2.33791972 PMC8816450 [PMID:33791972]
3. 3. Wurtz P. et al. Quantitative serum nuclear magnetic resonance metabolomics in large-scale epidemiology: a primer on -Omic technologies. Am J Epidemiol 2017;186:1084–96. 10.1093/aje/kwx016.29106475 PMC5860146 [PMID:29106475]
4. 4. Bizzarri D, Reinders MJT, Beekman M. et al. Technical report: a comprehensive comparison between different quantification versions of nightingale Health's (1)H-NMR metabolomics platform. Metabolites 2023;13:1181. 10.3390/metabo13121181.
5. 5. Mueller SG, Weiner MW, Thal LJ. et al. The Alzheimer's disease neuroimaging initiative. Neuroimaging Clin N Am 2005;15:869–77xi-xii. 10.1016/j.nic.2005.09.008.16443497 PMC2376747 [PMID:16443497]
6. 6. Julkunen H, Cichońska A, Tiainen M. et al. Atlas of plasma NMR biomarkers for health and disease in 118,461 individuals from the UK biobank. Nat Commun 2023;14:604. 10.1038/s41467-023-36231-7.36737450 PMC9898515 [PMID:36737450]
7. 7. Karjalainen MK, Karthikeyan S, Oliver-Williams C. et al. Genome-wide characterization of circulating metabolic biomarkers. Nature 2024;628:130–8. 10.1038/s41586-024-07148-y.38448586 PMC10990933 [PMID:38448586]
8. 8. Holmes MV, Millwood IY, Kartsonaki C. et al. Lipids, lipoproteins, and metabolites and risk of myocardial infarction and stroke. J Am Coll Cardiol 2018;71:620–32. 10.1016/j.jacc.2017.12.006.29420958 PMC5811927 [PMID:29420958]
9. 9. Sterne JA, White IR, Carlin JB. et al. Multiple imputation for missing data in epidemiological and clinical research: potential and pitfalls. BMJ 2009;338:b2393. 10.1136/bmj.b2393.19564179 PMC2714692 [PMID:19564179]
10. 10. Gillies CE, Jennaro TS, Puskarich MA. et al. A multilevel Bayesian approach to improve effect size estimation in regression Modeling of metabolomics data utilizing imputation with uncertainty. Metabolites 2020;10:319. 10.3390/metabo10080319.
11. 11. Wei R, Wang J, Su M. et al. Missing value imputation approach for mass spectrometry-based metabolomics data. Sci Rep 2018;8:663. 10.1038/s41598-017-19120-0.29330539 PMC5766532 [PMID:29330539]
12. 12. Dekermanjian JP, Shaddox E, Nandy D. et al. Mechanism-aware imputation: a two-step approach in handling missing values in metabolomics. BMC Bioinformatics 2022;23:179. 10.1186/s12859-022-04659-1.35578165 PMC9109373 [PMID:35578165]
13. 13. Buergel T, Steinfeldt J, Ruyoga G. et al. Metabolomic profiles predict individual multidisease outcomes. Nat Med 2022;28:2309–20. 10.1038/s41591-022-01980-3.36138150 PMC9671812 [PMID:36138150]
14. 14. Bizzarri D, Reinders MJT, Beekman M. et al. 1H-NMR metabolomics-based surrogates to impute common clinical risk factors and endpoints. EBioMedicine 2022;75:103764. 10.1016/j.ebiom.2021.103764.34942446 PMC8703237 [PMID:34942446]
15. 15. Stekhoven DJ, Buhlmann P. MissForest--non-parametric missing value imputation for mixed-type data. Bioinformatics 2012;28:112–8. 10.1093/bioinformatics/btr597.22039212 [PMID:22039212]
16. 16. Devlin J. et al. BERT: pre-training of deep bidirectional transformers for language understanding. 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Naacl Hlt 2019) 2019;1:4171–86.
17. 17. Vaswani A. et al. Attention is all you need. Advances in Neural Information Processing Systems 30 (Nips 2017) 2017;30:6000–10.
18. 18. Allen NE. et al. Prospective study design and data analysis in UK biobank. Sci Transl Med 2024;16:eadf4428.38198570 10.1126/scitranslmed.adf4428PMC11127744 [PMID:38198570]
19. 19. Sudlow C, Gallacher J, Allen N. et al. UK biobank: an open access resource for identifying the causes of a wide range of complex diseases of middle and old age. PLoS Med 2015;12:e1001779. 10.1371/journal.pmed.1001779.25826379 PMC4380465 [PMID:25826379]
20. 20. Nightingale Health Biobank Collaborative, G . Metabolomic and genomic prediction of common diseases in 700,217 participants in three national biobanks. Nat Commun 2024;15:10092. 10.1038/s41467-024-54357-0.39572536 PMC11582662 [PMID:39572536]
21. 21. Soininen P, Kangas AJ, Würtz P. et al. Quantitative serum nuclear magnetic resonance metabolomics in cardiovascular epidemiology and genetics. Circ Cardiovasc Genet 2015;8:192–206. 10.1161/CIRCGENETICS.114.000216.25691689 [PMID:25691689]
22. 22. Sun BB, Chiou J, Traylor M. et al. Plasma proteomic associations with genetics and health in the UK biobank. Nature 2023;622:329–38. 10.1038/s41586-023-06592-6.37794186 PMC10567551 [PMID:37794186]
23. 23. Varma VR, Oommen AM, Varma S. et al. Brain and blood metabolite signatures of pathology and progression in Alzheimer disease: a targeted metabolomics study. PLoS Med 2018;15:e1002482. 10.1371/journal.pmed.1002482.29370177 PMC5784884 [PMID:29370177]
24. 24. Wang T, Luo Z. Large language models transform biological research: from architecture to utilization. SCIENCE CHINA Inf Sci 2025;68:170101. 10.1007/s11432-024-4466-3.
25. 25. Gorishniy Y. et al. Revisiting deep learning models for tabular data. Advances in Neural Information Processing Systems 34 (Neurips 2021) 2021;34.
26. 26. Norouzi R, Norouzi R, Abbasi K. et al. DFT_ANPD: a dual-feature two-sided attention network for anticancer natural products detection. Comput Biol Med 2025;194:110442. 10.1016/j.compbiomed.2025.110442.40466240 [PMID:40466240]
27. 27. Abbasi K, Razzaghi P. Incorporating part-whole hierarchies into fully convolutional network for scene parsing. Expert Syst Appl 2020;160:113662. 10.1016/j.eswa.2020.113662.
28. 28. Shu H, Chen J, Xu C. et al. Efficient integration of spatial omics data for joint domain detection, matching, and alignment with stMSA. Genome Res 2025;35:2285–99. 10.1101/gr.280584.125.40813248 PMC12487823 [PMID:40813248]
29. 29. Zhang X, Chen J, Wang Y. et al. cfMethylPre: deep transfer learning enhances cancer detection based on circulating cell-free DNA methylation profiling. Brief Bioinform 2025;26:bbaf303. 10.1093/bib/bbaf303.
30. 30. Zhu P, Shu H, Wang Y. et al. MAEST: accurately spatial domain detection in spatial transcriptomics with graph masked autoencoder. Brief Bioinform 2025;26:bbaf086. 10.1093/bib/bbaf086.
31. 31. Cao C, Wang C, Dai Q. et al. CRBPSA: CircRNA-RBP interaction sites identification using sequence structural attention model. BMC Biol 2024;22:260. 10.1186/s12915-024-02055-0.39543602 PMC11566611 [PMID:39543602]
